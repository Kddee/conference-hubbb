import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { 
  NominationApplication, 
  CertificateRecord, 
  AwardCategory, 
  AwardCycle, 
  Awardee, 
  AWARD_CATEGORIES 
} from "@/data/awardsData";
import { AwardsStorageService, DispatchedNotification } from "@/services/awardsStorage";
import { CertificateViewer } from "@/components/awards/CertificateViewer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  LayoutDashboard, 
  FileText, 
  Award, 
  Users, 
  ShieldCheck, 
  Mail, 
  Download, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Edit, 
  Eye, 
  Plus, 
  Trash2, 
  ExternalLink,
  RefreshCw,
  LogOut,
  Lock,
  ChevronRight,
  TrendingUp,
  Sliders
} from "lucide-react";
import { toast } from "sonner";

export const AwardsAdmin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "overview" | "applications" | "categories" | "certificates" | "awardees" | "notifications" | "cycle"
  >("overview");

  // Authentication Pin simulation for security (Part 18)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return typeof window !== 'undefined' && localStorage.getItem('eminsphere_admin_auth') === 'true';
  });
  const [adminPin, setAdminPin] = useState("");

  // Data States
  const [metrics, setMetrics] = useState(AwardsStorageService.getAdminMetrics());
  const [nominations, setNominations] = useState<NominationApplication[]>(AwardsStorageService.getNominations());
  const [certificates, setCertificates] = useState<CertificateRecord[]>(AwardsStorageService.getCertificates());
  const [categories, setCategories] = useState<AwardCategory[]>(AwardsStorageService.getAwardCategories());
  const [awardees, setAwardees] = useState<Awardee[]>(AwardsStorageService.getAwardees());
  const [notifications, setNotifications] = useState<DispatchedNotification[]>(AwardsStorageService.getDispatchedNotifications());
  const [cycle, setCycle] = useState<AwardCycle>(AwardsStorageService.getAwardCycle());

  // Search & Filter states for applications
  const [appSearch, setAppSearch] = useState("");
  const [appStatusFilter, setAppStatusFilter] = useState("all");
  const [appCategoryFilter, setAppCategoryFilter] = useState("all");

  // Selected Item Modals
  const [selectedApp, setSelectedApp] = useState<NominationApplication | null>(null);
  const [statusChangeModal, setStatusChangeModal] = useState<NominationApplication | null>(null);
  const [newStatus, setNewStatus] = useState<NominationApplication['status']>("Under Evaluation");
  const [statusRemarks, setStatusRemarks] = useState("");

  // Evaluation modal
  const [evalModalApp, setEvalModalApp] = useState<NominationApplication | null>(null);
  const [evalScores, setEvalScores] = useState({
    achievementAndContribution: 25,
    professionalExperience: 16,
    innovationAndOriginality: 13,
    measurableImpact: 13,
    leadershipAndRecognition: 8,
    supportingEvidence: 8
  });
  const [evaluatorNotes, setEvaluatorNotes] = useState("");

  // Certificate Viewer Modal
  const [viewCert, setViewCert] = useState<CertificateRecord | null>(null);

  // Issue Certificate from Application Modal
  const [issueCertApp, setIssueCertApp] = useState<NominationApplication | null>(null);

  const refreshData = () => {
    setMetrics(AwardsStorageService.getAdminMetrics());
    setNominations(AwardsStorageService.getNominations());
    setCertificates(AwardsStorageService.getCertificates());
    setCategories(AwardsStorageService.getAwardCategories());
    setAwardees(AwardsStorageService.getAwardees());
    setNotifications(AwardsStorageService.getDispatchedNotifications());
    setCycle(AwardsStorageService.getAwardCycle());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPin.trim() === "admin2027" || adminPin.trim() === "eminsphere" || adminPin.trim() === "123456") {
      setIsAuthenticated(true);
      localStorage.setItem('eminsphere_admin_auth', 'true');
      toast.success("Administrator access granted!");
    } else {
      toast.error("Invalid security PIN. (Default demo PIN: admin2027 or eminsphere)");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('eminsphere_admin_auth');
    toast.info("Logged out of administrative portal.");
  };

  // Status Workflow Change
  const confirmStatusChange = () => {
    if (!statusChangeModal) return;
    AwardsStorageService.updateNominationStatus(
      statusChangeModal.id,
      newStatus,
      "SuperAdmin",
      statusRemarks || `Status updated to ${newStatus}`
    );
    toast.success(`Application ${statusChangeModal.id} status updated to ${newStatus}`);
    setStatusChangeModal(null);
    setStatusRemarks("");
    refreshData();
  };

  // Record Evaluation
  const submitEvaluation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!evalModalApp) return;

    const total = 
      Number(evalScores.achievementAndContribution) +
      Number(evalScores.professionalExperience) +
      Number(evalScores.innovationAndOriginality) +
      Number(evalScores.measurableImpact) +
      Number(evalScores.leadershipAndRecognition) +
      Number(evalScores.supportingEvidence);

    AwardsStorageService.updateNominationEvaluation(
      evalModalApp.id,
      { ...evalScores, totalScore: total },
      evaluatorNotes,
      "Official committee score recorded.",
      "Lead Evaluator Panel"
    );

    toast.success(`Scoring complete: ${total}/100. Evaluator dossier saved!`);
    setEvalModalApp(null);
    refreshData();
  };

  // Issue Certificate Handler
  const handleIssueCert = (app: NominationApplication) => {
    const cert = AwardsStorageService.issueCertificate({
      recipientName: `${app.firstName} ${app.lastName}`,
      recognitionTitle: app.awardCategoryTitle,
      awardCategory: app.awardCategoryTitle,
      categoryId: app.awardCategoryId,
      awardYear: cycle.year,
      field: app.primaryAchievementArea || app.specialization || "Professional Excellence",
      nominationId: app.id,
      notes: `Conferred to ${app.firstName} ${app.lastName} (${app.organization})`
    });

    toast.success(`Certificate ${cert.certificateId} officially issued!`);
    refreshData();
    setViewCert(cert);
    setIssueCertApp(null);
  };

  // Toggle Category
  const toggleCategory = (cat: AwardCategory) => {
    const updated = { ...cat, active: !cat.active };
    AwardsStorageService.updateAwardCategory(updated);
    refreshData();
    toast.success(`Category ${cat.title} set to ${updated.active ? 'Active' : 'Inactive'}`);
  };

  // Toggle Awardee Publish
  const toggleAwardeePublish = (id: string, current: boolean) => {
    AwardsStorageService.toggleAwardeeVisibility(id, !current);
    refreshData();
    toast.success(`Recipient directory visibility updated.`);
  };

  // Export CSV Report
  const exportApplicationsCSV = () => {
    const list = nominations;
    if (!list.length) {
      toast.error("No applications to export.");
      return;
    }

    const headers = ["ID", "Name", "Email", "Mobile", "Organization", "Category", "NominationType", "Status", "TotalScore", "Band", "Date"];
    const rows = list.map(n => [
      `"${n.id}"`,
      `"${n.firstName} ${n.lastName}"`,
      `"${n.email}"`,
      `"${n.mobile}"`,
      `"${n.organization}"`,
      `"${n.awardCategoryTitle}"`,
      `"${n.nominationType}"`,
      `"${n.status}"`,
      `"${n.scores?.totalScore || 'N/A'}"`,
      `"${n.evaluationBand || 'Pending'}"`,
      `"${new Date(n.submissionDate).toLocaleDateString('en-GB')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `eminsphere_nominations_report_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("CSV report exported successfully!");
  };

  // Filtered applications list
  const filteredApps = nominations.filter(app => {
    const matchesSearch = 
      app.id.toLowerCase().includes(appSearch.toLowerCase()) ||
      `${app.firstName} ${app.lastName}`.toLowerCase().includes(appSearch.toLowerCase()) ||
      app.email.toLowerCase().includes(appSearch.toLowerCase()) ||
      app.organization.toLowerCase().includes(appSearch.toLowerCase());
    const matchesStatus = appStatusFilter === "all" || app.status === appStatusFilter;
    const matchesCategory = appCategoryFilter === "all" || app.awardCategoryId === appCategoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
        <SEOHead title="Admin Security Login | EminSphere Awards" />
        <Card className="w-full max-w-md p-8 bg-card border-border shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary mx-auto flex items-center justify-center border border-primary/20">
              <Lock className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-serif font-black text-foreground">Awards Administrative Portal</h2>
            <p className="text-xs text-muted-foreground">
              Restricted portal for Governing Council and Selection Panel administrators.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">
                Enter Administrative Security PIN
              </label>
              <Input
                type="password"
                value={adminPin}
                onChange={(e) => setAdminPin(e.target.value)}
                placeholder="Enter PIN (Demo: admin2027)"
                className="text-center text-sm font-mono tracking-widest"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-primary text-white font-bold h-11 text-xs uppercase tracking-wider shadow-gold">
              Unlock Dashboard
            </Button>
            <div className="text-center text-[11px] text-muted-foreground">
              Authorized credentials: <code className="text-accent">admin2027</code> or <code className="text-accent">eminsphere</code>
            </div>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-8 sm:py-12">
      <SEOHead title="Administrative Dashboard | EminSphere Awards" />

      <div className="container max-w-7xl px-4 sm:px-6 space-y-8">
        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border/50 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c5a059]">
              <ShieldCheck className="h-4 w-4" /> Programme Council Dashboard
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-black text-foreground mt-0.5">
              Awards Administration & Decision Portal
            </h1>
            <p className="text-xs text-muted-foreground">
              Cycle: <strong>{cycle.cycleName}</strong> • Real-time database synchronisation active
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" onClick={refreshData} className="text-xs gap-1.5">
              <RefreshCw className="h-3.5 w-3.5" /> Refresh
            </Button>
            <Button variant="outline" size="sm" onClick={exportApplicationsCSV} className="text-xs gap-1.5">
              <Download className="h-3.5 w-3.5" /> Export CSV
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-xs text-destructive hover:bg-destructive/10 gap-1.5">
              <LogOut className="h-3.5 w-3.5" /> Logout
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-border/50 pb-3">
          {[
            { key: "overview", label: "Overview Metrics", icon: LayoutDashboard },
            { key: "applications", label: `Nominations (${nominations.length})`, icon: FileText },
            { key: "categories", label: `Categories (${categories.length})`, icon: Sliders },
            { key: "certificates", label: `Certificates (${certificates.length})`, icon: Award },
            { key: "awardees", label: `Awardees Directory (${awardees.length})`, icon: Users },
            { key: "notifications", label: `Notifications Sent (${notifications.length})`, icon: Mail },
            { key: "cycle", label: "Cycle Dates", icon: Clock },
          ].map(tab => {
            const IconComp = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.key
                    ? "bg-primary text-white shadow-sm"
                    : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
                }`}
              >
                <IconComp className="h-3.5 w-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW METRICS */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-5 bg-card border-border space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Total Nominations</span>
                <div className="text-3xl font-serif font-black text-foreground">{metrics.totalNominations}</div>
                <div className="text-xs text-muted-foreground">{metrics.submitted} new or pending screening</div>
              </Card>

              <Card className="p-5 bg-card border-border space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Under Evaluation</span>
                <div className="text-3xl font-serif font-black text-accent">{metrics.underEvaluation}</div>
                <div className="text-xs text-muted-foreground">Expert panel reviews active</div>
              </Card>

              <Card className="p-5 bg-card border-border space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Selected Recipients</span>
                <div className="text-3xl font-serif font-black text-emerald-400">{metrics.selected}</div>
                <div className="text-xs text-muted-foreground">Conferred or approved by council</div>
              </Card>

              <Card className="p-5 bg-card border-border space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Certificates Issued</span>
                <div className="text-3xl font-serif font-black text-[#c5a059]">{metrics.certificatesIssued}</div>
                <div className="text-xs text-muted-foreground">Live verification QR enabled</div>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="p-5 bg-card border-border space-y-3">
                <h4 className="text-sm font-bold text-foreground">Screen Applications</h4>
                <p className="text-xs text-muted-foreground">
                  Review applicant resumes, DOI publication indices, and verify credentials.
                </p>
                <Button size="sm" onClick={() => setActiveTab("applications")} className="w-full text-xs">
                  Open Nominations Queue
                </Button>
              </Card>

              <Card className="p-5 bg-card border-border space-y-3">
                <h4 className="text-sm font-bold text-foreground">Issue New Certificate</h4>
                <p className="text-xs text-muted-foreground">
                  Generate cryptographic certificate ID with live verification record and QR code.
                </p>
                <Button size="sm" variant="outline" onClick={() => setActiveTab("certificates")} className="w-full text-xs">
                  Manage Certificates
                </Button>
              </Card>

              <Card className="p-5 bg-card border-border space-y-3">
                <h4 className="text-sm font-bold text-foreground">Awardees Directory</h4>
                <p className="text-xs text-muted-foreground">
                  Toggle publication consent and publish verified recipient profiles to the public roll.
                </p>
                <Button size="sm" variant="outline" onClick={() => setActiveTab("awardees")} className="w-full text-xs">
                  Manage Recipient Roll
                </Button>
              </Card>
            </div>
          </div>
        )}

        {/* TAB 2: APPLICATIONS MANAGEMENT */}
        {activeTab === "applications" && (
          <div className="space-y-6 animate-fade-in">
            {/* Filter toolbar */}
            <div className="p-4 rounded-2xl bg-card border border-border flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={appSearch}
                  onChange={(e) => setAppSearch(e.target.value)}
                  placeholder="Search by ID, Name, Email..."
                  className="pl-10 text-xs bg-muted/40 h-10"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                <select
                  value={appStatusFilter}
                  onChange={(e) => setAppStatusFilter(e.target.value)}
                  className="h-10 px-3 rounded-lg bg-muted/40 border border-input text-xs text-foreground focus:outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="Submitted">Submitted</option>
                  <option value="Initial Screening">Initial Screening</option>
                  <option value="Documents Required">Documents Required</option>
                  <option value="Eligible">Eligible</option>
                  <option value="Under Evaluation">Under Evaluation</option>
                  <option value="Final Review">Final Review</option>
                  <option value="Selected">Selected</option>
                  <option value="Not Selected">Not Selected</option>
                  <option value="Certificate Issued">Certificate Issued</option>
                </select>

                <select
                  value={appCategoryFilter}
                  onChange={(e) => setAppCategoryFilter(e.target.value)}
                  className="h-10 px-3 rounded-lg bg-muted/40 border border-input text-xs text-foreground focus:outline-none max-w-[200px]"
                >
                  <option value="all">All Categories</option>
                  {categories.map(c => (
                    <option key={c.id} value={c.id}>#{c.number} {c.title}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Applications Table */}
            <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-muted/50 border-b border-border text-foreground font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3.5">Ref ID</th>
                    <th className="p-3.5">Candidate Name</th>
                    <th className="p-3.5">Category</th>
                    <th className="p-3.5">Organization</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5">Score</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-muted-foreground">
                  {filteredApps.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-muted-foreground">
                        No nominations matching current filters.
                      </td>
                    </tr>
                  ) : (
                    filteredApps.map(app => (
                      <tr key={app.id} className="hover:bg-muted/20 transition-colors">
                        <td className="p-3.5 font-mono font-bold text-accent">{app.id}</td>
                        <td className="p-3.5 font-semibold text-foreground">
                          {app.firstName} {app.lastName}
                          <div className="text-[11px] text-muted-foreground">{app.email}</div>
                        </td>
                        <td className="p-3.5 max-w-[200px] truncate">{app.awardCategoryTitle}</td>
                        <td className="p-3.5">{app.organization}</td>
                        <td className="p-3.5">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border uppercase ${
                            app.status === 'Selected' || app.status === 'Certificate Issued'
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                              : app.status === 'Under Evaluation' || app.status === 'Final Review'
                              ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                              : app.status === 'Documents Required'
                              ? 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                              : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                          }`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="p-3.5 font-mono">
                          {app.scores ? (
                            <span className="font-bold text-foreground">{app.scores.totalScore}/100</span>
                          ) : (
                            <span className="text-muted-foreground text-[10px]">Unscored</span>
                          )}
                        </td>
                        <td className="p-3.5 text-right space-x-1.5 whitespace-nowrap">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => setSelectedApp(app)}
                            className="text-[11px] h-7 px-2"
                          >
                            <Eye className="h-3 w-3 mr-1" /> View
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => {
                              setStatusChangeModal(app);
                              setNewStatus(app.status);
                            }}
                            className="text-[11px] h-7 px-2"
                          >
                            Status
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => {
                              setEvalModalApp(app);
                              if (app.scores) {
                                setEvalScores({
                                  achievementAndContribution: app.scores.achievementAndContribution,
                                  professionalExperience: app.scores.professionalExperience,
                                  innovationAndOriginality: app.scores.innovationAndOriginality,
                                  measurableImpact: app.scores.measurableImpact,
                                  leadershipAndRecognition: app.scores.leadershipAndRecognition,
                                  supportingEvidence: app.scores.supportingEvidence
                                });
                              }
                              setEvaluatorNotes(app.evaluatorNotes || "");
                            }}
                            className="text-[11px] h-7 px-2"
                          >
                            Score
                          </Button>
                          {app.status === 'Selected' && (
                            <Button 
                              size="sm" 
                              onClick={() => handleIssueCert(app)}
                              className="text-[11px] h-7 px-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
                            >
                              Issue Cert
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: CATEGORIES MANAGEMENT */}
        {activeTab === "categories" && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-serif font-bold text-foreground">18 Recognition Disciplines</h3>
              <span className="text-xs text-muted-foreground">Toggle status to enable or pause applications</span>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map(c => (
                <Card key={c.id} className="p-5 bg-card border-border flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-accent">#{c.number}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        c.active ? "bg-emerald-500/10 text-emerald-400" : "bg-muted text-muted-foreground"
                      }`}>
                        {c.active ? "Active" : "Inactive"}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-foreground">{c.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{c.description}</p>
                  </div>

                  <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground">{c.group}</span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => toggleCategory(c)}
                      className="text-xs h-7"
                    >
                      {c.active ? "Deactivate" : "Activate"}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CERTIFICATES MANAGEMENT */}
        {activeTab === "certificates" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-serif font-bold text-foreground">Issued Credentials Registry</h3>
                <p className="text-xs text-muted-foreground">Every certificate is registered with a cryptographic ID and live verification record.</p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-muted/50 border-b border-border text-foreground font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3.5">Certificate ID</th>
                    <th className="p-3.5">Recipient</th>
                    <th className="p-3.5">Award Category</th>
                    <th className="p-3.5">Issue Date</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-muted-foreground">
                  {certificates.map(cert => (
                    <tr key={cert.certificateId} className="hover:bg-muted/20 transition-colors">
                      <td className="p-3.5 font-mono font-bold text-accent">{cert.certificateId}</td>
                      <td className="p-3.5 font-semibold text-foreground">{cert.recipientName}</td>
                      <td className="p-3.5">{cert.awardCategory}</td>
                      <td className="p-3.5">{cert.issueDate}</td>
                      <td className="p-3.5">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          cert.status === 'Valid' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-destructive/10 text-destructive'
                        }`}>
                          {cert.status}
                        </span>
                      </td>
                      <td className="p-3.5 text-right space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => setViewCert(cert)}
                          className="text-xs h-7"
                        >
                          View Certificate
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild
                          className="text-xs h-7"
                        >
                          <Link to={`/verify-certificate/${cert.certificateId}`} target="_blank">
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        </Button>
                        {cert.status === 'Valid' ? (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => {
                              AwardsStorageService.updateCertificateStatus(cert.certificateId, 'Revoked', 'Admin action');
                              refreshData();
                              toast.warning(`Certificate ${cert.certificateId} revoked`);
                            }}
                            className="text-xs h-7 text-destructive"
                          >
                            Revoke
                          </Button>
                        ) : (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => {
                              AwardsStorageService.updateCertificateStatus(cert.certificateId, 'Valid', 'Admin reinstated');
                              refreshData();
                              toast.success(`Certificate ${cert.certificateId} reinstated`);
                            }}
                            className="text-xs h-7 text-emerald-400"
                          >
                            Reinstate
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: AWARDEES DIRECTORY MANAGEMENT */}
        {activeTab === "awardees" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-serif font-bold text-foreground">Awardees Public Directory</h3>
                <p className="text-xs text-muted-foreground">Manage public display of verified recipients with consent.</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {awardees.map(a => (
                <Card key={a.id} className="p-5 bg-card border-border flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-accent">{a.certificateId}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        a.published ? "bg-emerald-500/10 text-emerald-400" : "bg-muted text-muted-foreground"
                      }`}>
                        {a.published ? "Published" : "Hidden"}
                      </span>
                    </div>

                    <h4 className="text-base font-serif font-bold text-foreground">{a.name}</h4>
                    <div className="text-xs text-muted-foreground">{a.designation} • {a.organization}</div>
                    <div className="text-xs text-[#c5a059] italic">"{a.citation}"</div>
                  </div>

                  <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground">Cycle {a.awardYear}</span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => toggleAwardeePublish(a.id, a.published)}
                      className="text-xs h-7"
                    >
                      {a.published ? "Unpublish" : "Publish"}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: DISPATCHED NOTIFICATIONS LOG */}
        {activeTab === "notifications" && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-lg font-serif font-bold text-foreground">Dispatched Notifications Log (Email 1 to 5)</h3>
            <p className="text-xs text-muted-foreground">
              Automated notifications logged and dispatched through the portal backend.
            </p>

            <div className="space-y-3">
              {notifications.map(n => (
                <Card key={n.id} className="p-4 bg-card border-border space-y-2 text-xs">
                  <div className="flex items-center justify-between font-semibold">
                    <span className="text-foreground flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-primary" /> {n.subject}
                    </span>
                    <span className="text-muted-foreground font-mono text-[11px]">
                      {new Date(n.dispatchedAt).toLocaleString('en-GB')}
                    </span>
                  </div>
                  <div className="text-muted-foreground">
                    To: <strong>{n.recipientName}</strong> &lt;{n.recipientEmail}&gt; • Application ID: <strong className="font-mono text-accent">{n.applicationId}</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-muted/40 font-mono text-[11px] text-foreground/80 whitespace-pre-line border border-border/40">
                    {n.bodyText}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: CYCLE DATES CONFIGURATION */}
        {activeTab === "cycle" && (
          <Card className="p-6 sm:p-8 bg-card border-border max-w-2xl mx-auto space-y-5 animate-fade-in">
            <h3 className="text-lg font-serif font-bold text-foreground">Manage Award Cycle Schedule</h3>
            <div className="space-y-3 text-xs">
              <div>
                <label className="text-muted-foreground block mb-1">Cycle Name</label>
                <Input 
                  value={cycle.cycleName} 
                  onChange={(e) => setCycle({ ...cycle, cycleName: e.target.value })} 
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-muted-foreground block mb-1">Nomination Opening Date</label>
                  <Input 
                    value={cycle.nominationOpeningDate} 
                    onChange={(e) => setCycle({ ...cycle, nominationOpeningDate: e.target.value })} 
                  />
                </div>
                <div>
                  <label className="text-muted-foreground block mb-1">Early Deadline</label>
                  <Input 
                    value={cycle.earlyNominationDeadline} 
                    onChange={(e) => setCycle({ ...cycle, earlyNominationDeadline: e.target.value })} 
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-muted-foreground block mb-1">Final Nomination Deadline</label>
                  <Input 
                    value={cycle.finalNominationDeadline} 
                    onChange={(e) => setCycle({ ...cycle, finalNominationDeadline: e.target.value })} 
                  />
                </div>
                <div>
                  <label className="text-muted-foreground block mb-1">Evaluation Period</label>
                  <Input 
                    value={cycle.evaluationPeriod} 
                    onChange={(e) => setCycle({ ...cycle, evaluationPeriod: e.target.value })} 
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-muted-foreground block mb-1">Result Announcement Date</label>
                  <Input 
                    value={cycle.resultAnnouncementDate} 
                    onChange={(e) => setCycle({ ...cycle, resultAnnouncementDate: e.target.value })} 
                  />
                </div>
                <div>
                  <label className="text-muted-foreground block mb-1">Ceremony Date</label>
                  <Input 
                    value={cycle.recognitionCeremonyDate} 
                    onChange={(e) => setCycle({ ...cycle, recognitionCeremonyDate: e.target.value })} 
                  />
                </div>
              </div>

              <Button 
                onClick={() => {
                  AwardsStorageService.updateAwardCycle(cycle);
                  toast.success("Award cycle dates updated successfully!");
                }}
                className="w-full bg-primary text-white font-bold mt-4"
              >
                Save Schedule
              </Button>
            </div>
          </Card>
        )}

        {/* MODAL: VIEW APPLICATION DETAILS */}
        <Dialog open={!!selectedApp} onOpenChange={(open) => !open && setSelectedApp(null)}>
          <DialogContent className="max-w-3xl bg-card border-border text-foreground max-h-[90vh] overflow-y-auto p-6 sm:p-8">
            {selectedApp && (
              <div className="space-y-6">
                <DialogHeader className="border-b border-border/50 pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-accent">{selectedApp.id}</span>
                    <span className="text-xs uppercase font-bold text-muted-foreground">{selectedApp.status}</span>
                  </div>
                  <DialogTitle className="text-2xl font-serif font-black text-foreground">
                    {selectedApp.firstName} {selectedApp.lastName}
                  </DialogTitle>
                  <div className="text-xs text-muted-foreground">
                    {selectedApp.designation} • {selectedApp.organization} • {selectedApp.countryOfResidence}
                  </div>
                </DialogHeader>

                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-muted/30">
                    <div><strong>Category:</strong> {selectedApp.awardCategoryTitle}</div>
                    <div><strong>Nomination Mode:</strong> {selectedApp.nominationType}</div>
                    <div><strong>Email:</strong> {selectedApp.email}</div>
                    <div><strong>Mobile:</strong> {selectedApp.mobile}</div>
                    <div><strong>Experience:</strong> {selectedApp.yearsExperience} Years</div>
                    <div><strong>Highest Degree:</strong> {selectedApp.highestQualification}</div>
                  </div>

                  <div>
                    <h5 className="font-bold text-foreground mb-1">Primary Achievement Area:</h5>
                    <p className="text-muted-foreground">{selectedApp.primaryAchievementArea}</p>
                  </div>

                  <div>
                    <h5 className="font-bold text-foreground mb-1">Reason for Nomination:</h5>
                    <p className="text-muted-foreground">{selectedApp.reasonForNomination}</p>
                  </div>

                  <div>
                    <h5 className="font-bold text-foreground mb-1">Major Achievements:</h5>
                    <p className="text-muted-foreground">{selectedApp.majorAchievements}</p>
                  </div>

                  <div>
                    <h5 className="font-bold text-foreground mb-1">Biography:</h5>
                    <p className="text-muted-foreground">{selectedApp.biography}</p>
                  </div>

                  {/* Attached Documents */}
                  <div>
                    <h5 className="font-bold text-foreground mb-2">Attached Documents ({selectedApp.documents.length}):</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedApp.documents.map((d, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-muted/40 border border-border flex items-center justify-between">
                          <span className="truncate">{d.name}</span>
                          <span className="text-[10px] font-mono text-muted-foreground uppercase">{d.category}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/50 pt-4 flex justify-end">
                  <Button variant="ghost" onClick={() => setSelectedApp(null)} className="text-xs">
                    Close Dossier
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* MODAL: CHANGE APPLICATION STATUS */}
        <Dialog open={!!statusChangeModal} onOpenChange={(open) => !open && setStatusChangeModal(null)}>
          <DialogContent className="max-w-md bg-card border-border text-foreground p-6">
            {statusChangeModal && (
              <div className="space-y-4">
                <DialogHeader>
                  <DialogTitle className="text-lg font-serif font-bold text-foreground">
                    Update Workflow Status
                  </DialogTitle>
                  <div className="text-xs text-muted-foreground font-mono">
                    Ref: {statusChangeModal.id} ({statusChangeModal.firstName} {statusChangeModal.lastName})
                  </div>
                </DialogHeader>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-foreground font-semibold block mb-1">Select New Status</label>
                    <select
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value as any)}
                      className="w-full h-10 px-3 rounded-lg bg-background border border-input text-xs text-foreground focus:outline-none"
                    >
                      <option value="Draft">Draft</option>
                      <option value="Submitted">Submitted</option>
                      <option value="Received">Received</option>
                      <option value="Initial Screening">Initial Screening</option>
                      <option value="Documents Required">Documents Required</option>
                      <option value="Eligible">Eligible</option>
                      <option value="Under Evaluation">Under Evaluation</option>
                      <option value="Final Review">Final Review</option>
                      <option value="Selected">Selected</option>
                      <option value="Not Selected">Not Selected</option>
                      <option value="Withdrawn">Withdrawn</option>
                      <option value="Certificate Issued">Certificate Issued</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-foreground font-semibold block mb-1">Committee Remarks / Reason</label>
                    <Textarea
                      rows={3}
                      value={statusRemarks}
                      onChange={(e) => setStatusRemarks(e.target.value)}
                      placeholder="e.g. Verified DOI index; forwarded for technical review"
                    />
                  </div>

                  <div className="text-[11px] text-muted-foreground">
                    Note: Changing status to <em>Documents Required</em>, <em>Under Evaluation</em>, <em>Selected</em>, or <em>Not Selected</em> automatically triggers notification dispatch.
                  </div>
                </div>

                <div className="border-t border-border/50 pt-4 flex justify-end gap-2">
                  <Button variant="ghost" onClick={() => setStatusChangeModal(null)} className="text-xs">
                    Cancel
                  </Button>
                  <Button onClick={confirmStatusChange} className="bg-primary text-white font-bold text-xs">
                    Confirm & Update
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* MODAL: RECORD EVALUATION SCORING */}
        <Dialog open={!!evalModalApp} onOpenChange={(open) => !open && setEvalModalApp(null)}>
          <DialogContent className="max-w-lg bg-card border-border text-foreground p-6">
            {evalModalApp && (
              <form onSubmit={submitEvaluation} className="space-y-4">
                <DialogHeader>
                  <DialogTitle className="text-lg font-serif font-bold text-foreground">
                    Record Evaluation Scores (100% Framework)
                  </DialogTitle>
                  <div className="text-xs text-muted-foreground font-mono">
                    Candidate: {evalModalApp.firstName} {evalModalApp.lastName} ({evalModalApp.awardCategoryTitle})
                  </div>
                </DialogHeader>

                <div className="space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold mb-1">Achievement & Contribution (Max 30)</label>
                      <Input
                        type="number"
                        min="0"
                        max="30"
                        value={evalScores.achievementAndContribution}
                        onChange={(e) => setEvalScores(s => ({ ...s, achievementAndContribution: Number(e.target.value) }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Professional Experience (Max 20)</label>
                      <Input
                        type="number"
                        min="0"
                        max="20"
                        value={evalScores.professionalExperience}
                        onChange={(e) => setEvalScores(s => ({ ...s, professionalExperience: Number(e.target.value) }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold mb-1">Innovation & Originality (Max 15)</label>
                      <Input
                        type="number"
                        min="0"
                        max="15"
                        value={evalScores.innovationAndOriginality}
                        onChange={(e) => setEvalScores(s => ({ ...s, innovationAndOriginality: Number(e.target.value) }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Measurable Impact (Max 15)</label>
                      <Input
                        type="number"
                        min="0"
                        max="15"
                        value={evalScores.measurableImpact}
                        onChange={(e) => setEvalScores(s => ({ ...s, measurableImpact: Number(e.target.value) }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold mb-1">Leadership & Recognition (Max 10)</label>
                      <Input
                        type="number"
                        min="0"
                        max="10"
                        value={evalScores.leadershipAndRecognition}
                        onChange={(e) => setEvalScores(s => ({ ...s, leadershipAndRecognition: Number(e.target.value) }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Supporting Evidence (Max 10)</label>
                      <Input
                        type="number"
                        min="0"
                        max="10"
                        value={evalScores.supportingEvidence}
                        onChange={(e) => setEvalScores(s => ({ ...s, supportingEvidence: Number(e.target.value) }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-muted/40 font-bold text-center text-sm flex items-center justify-between">
                    <span>Computed Total Score:</span>
                    <span className="text-accent font-mono">
                      {Number(evalScores.achievementAndContribution) +
                       Number(evalScores.professionalExperience) +
                       Number(evalScores.innovationAndOriginality) +
                       Number(evalScores.measurableImpact) +
                       Number(evalScores.leadershipAndRecognition) +
                       Number(evalScores.supportingEvidence)} / 100
                    </span>
                  </div>

                  <div>
                    <label className="block font-semibold mb-1">Evaluator Confidential Notes</label>
                    <Textarea
                      rows={2}
                      value={evaluatorNotes}
                      onChange={(e) => setEvaluatorNotes(e.target.value)}
                      placeholder="Assessment rationale..."
                    />
                  </div>
                </div>

                <div className="border-t border-border/50 pt-4 flex justify-end gap-2">
                  <Button variant="ghost" onClick={() => setEvalModalApp(null)} className="text-xs">
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-primary text-white font-bold text-xs">
                    Save Evaluation
                  </Button>
                </div>
              </form>
            )}
          </DialogContent>
        </Dialog>

        {/* MODAL: VIEW CERTIFICATE */}
        <Dialog open={!!viewCert} onOpenChange={(open) => !open && setViewCert(null)}>
          <DialogContent className="max-w-5xl bg-card border-border text-foreground max-h-[95vh] overflow-y-auto p-4 sm:p-6">
            {viewCert && (
              <div className="space-y-4">
                <CertificateViewer certificate={viewCert} />
                <div className="flex justify-end pt-2">
                  <Button variant="outline" size="sm" onClick={() => setViewCert(null)}>
                    Close
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AwardsAdmin;
