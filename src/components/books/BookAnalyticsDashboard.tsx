import React, { useState, useEffect, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  Download,
  FileSpreadsheet,
  TrendingUp,
  CreditCard,
  Star,
  Search,
  BookOpen,
  ArrowUpDown,
  Sparkles,
  ShoppingBag,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import {
  getAllBooksAnalytics,
  getCatalogSummary,
  getAllOrders,
  exportAnalyticsCSV,
  subscribeToRecords,
  BookAnalyticsRecord,
  OrderRecord,
} from "@/services/bookRecordsService";
import { Book } from "@/data/booksData";
import { Link } from "react-router-dom";

interface BookAnalyticsDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  initialBookId?: string;
}

export const BookAnalyticsDashboard: React.FC<BookAnalyticsDashboardProps> = ({
  isOpen,
  onClose,
  initialBookId,
}) => {
  const [activeTab, setActiveTab] = useState<"records" | "charts" | "orders">("records");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"downloads" | "orders" | "revenue" | "rating">("downloads");
  const [records, setRecords] = useState<Array<BookAnalyticsRecord & { book: Book }>>([]);
  const [summary, setSummary] = useState(getCatalogSummary());
  const [orders, setOrders] = useState<OrderRecord[]>([]);

  const reloadData = () => {
    setRecords(getAllBooksAnalytics());
    setSummary(getCatalogSummary());
    setOrders(getAllOrders());
  };

  useEffect(() => {
    reloadData();
    const unsubscribe = subscribeToRecords(() => {
      reloadData();
    });
    return unsubscribe;
  }, []);

  // Filter & sort records
  const filteredRecords = useMemo(() => {
    return records
      .filter((r) => {
        const q = searchQuery.toLowerCase();
        return (
          r.book.title.toLowerCase().includes(q) ||
          r.book.authors.toLowerCase().includes(q) ||
          r.book.isbn.toLowerCase().includes(q)
        );
      })
      .sort((a, b) => {
        if (sortBy === "downloads") return b.downloadsCount - a.downloadsCount;
        if (sortBy === "orders") return b.ordersCount - a.ordersCount;
        if (sortBy === "revenue") return b.totalRevenueINR - a.totalRevenueINR;
        if (sortBy === "rating") return b.averageRating - a.averageRating;
        return 0;
      });
  }, [records, searchQuery, sortBy]);

  // Chart data for top 7 books
  const topDownloadedData = useMemo(() => {
    return [...records]
      .sort((a, b) => b.downloadsCount - a.downloadsCount)
      .slice(0, 6)
      .map((r) => ({
        name: r.book.title.slice(0, 18) + "...",
        fullName: r.book.title,
        downloads: r.downloadsCount,
        orders: r.ordersCount,
      }));
  }, [records]);

  const topRevenueData = useMemo(() => {
    return [...records]
      .sort((a, b) => b.totalRevenueINR - a.totalRevenueINR)
      .slice(0, 6)
      .map((r) => ({
        name: r.book.title.slice(0, 18) + "...",
        fullName: r.book.title,
        revenue: r.totalRevenueINR,
      }));
  }, [records]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl max-h-[92vh] overflow-y-auto p-6 sm:p-8 bg-card border-border/80 rounded-3xl shadow-2xl">
        <DialogHeader className="space-y-2 text-left">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Eminsphere Publishing Intelligence & Metrics</span>
            </div>
            <Button
              onClick={() => exportAnalyticsCSV()}
              size="sm"
              variant="outline"
              className="rounded-xl font-bold gap-2 text-xs border-emerald-500/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-500" />
              Export Records to CSV
            </Button>
          </div>

          <DialogTitle className="text-2xl sm:text-3xl font-serif font-bold text-primary">
            Book Records & Analytics Dashboard
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
            Track total downloads, direct orders, reader reviews, and revenue performance for each published volume.
          </DialogDescription>
        </DialogHeader>

        {/* 4 TOP SUMMARY STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <Card className="p-4 sm:p-5 bg-gradient-to-br from-emerald-500/10 to-transparent border-emerald-500/20 rounded-2xl">
            <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 mb-1">
              <span className="text-xs font-semibold uppercase tracking-wider">Total Downloads</span>
              <Download className="w-4 h-4" />
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-foreground">
              {summary.totalDownloads.toLocaleString()}
            </div>
            <p className="text-[11px] text-muted-foreground mt-1">
              Digital monograph & eBook receipts
            </p>
          </Card>

          <Card className="p-4 sm:p-5 bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20 rounded-2xl">
            <div className="flex items-center justify-between text-blue-600 dark:text-blue-400 mb-1">
              <span className="text-xs font-semibold uppercase tracking-wider">Direct Orders</span>
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-foreground">
              {summary.totalOrders.toLocaleString()}
            </div>
            <p className="text-[11px] text-muted-foreground mt-1">
              {summary.totalEbookOrders} eBook • {summary.totalPaperbackOrders} Paperback
            </p>
          </Card>

          <Card className="p-4 sm:p-5 bg-gradient-to-br from-amber-500/10 to-transparent border-amber-500/20 rounded-2xl">
            <div className="flex items-center justify-between text-amber-600 dark:text-amber-400 mb-1">
              <span className="text-xs font-semibold uppercase tracking-wider">Direct Revenue</span>
              <CreditCard className="w-4 h-4" />
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-foreground">
              ₹{summary.totalRevenueINR.toLocaleString()}
            </div>
            <p className="text-[11px] text-muted-foreground mt-1">
              Razorpay verified settlements
            </p>
          </Card>

          <Card className="p-4 sm:p-5 bg-gradient-to-br from-purple-500/10 to-transparent border-purple-500/20 rounded-2xl">
            <div className="flex items-center justify-between text-purple-600 dark:text-purple-400 mb-1">
              <span className="text-xs font-semibold uppercase tracking-wider">Catalog Rating</span>
              <Star className="w-4 h-4 fill-current" />
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-foreground flex items-center gap-1.5">
              <span>{summary.averageRating}</span>
              <span className="text-xs text-muted-foreground font-normal">/ 5.0</span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-1">
              {summary.totalReviews} verified academic reviews
            </p>
          </Card>
        </div>

        {/* NAVIGATION TABS */}
        <div className="flex items-center gap-2 border-b border-border/60 pt-4">
          <button
            onClick={() => setActiveTab("records")}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              activeTab === "records"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            All Book Records ({records.length})
          </button>
          <button
            onClick={() => setActiveTab("charts")}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              activeTab === "charts"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Visual Trends & Charts
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              activeTab === "orders"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Order Audit Log ({orders.length})
          </button>
        </div>

        {/* TAB 1: ALL BOOK RECORDS TABLE */}
        {activeTab === "records" && (
          <div className="space-y-4 pt-2">
            {/* Search and Sort Toolbar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by book title, author, or ISBN..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 rounded-xl text-xs sm:text-sm h-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground flex items-center gap-1 font-medium shrink-0">
                  <ArrowUpDown className="w-3.5 h-3.5" /> Sort by:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-muted text-foreground border border-border/70 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="downloads">Total Downloads</option>
                  <option value="orders">Direct Orders Placed</option>
                  <option value="revenue">Total Revenue (₹)</option>
                  <option value="rating">Highest Reader Rating</option>
                </select>
              </div>
            </div>

            {/* Records Table */}
            <div className="border border-border/70 rounded-2xl overflow-x-auto shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-muted/70 text-muted-foreground uppercase text-[10px] tracking-wider font-bold border-b border-border/60">
                  <tr>
                    <th className="p-3.5 pl-4">Book Details</th>
                    <th className="p-3.5">ISBN</th>
                    <th className="p-3.5 text-center">Downloads</th>
                    <th className="p-3.5 text-center">Orders</th>
                    <th className="p-3.5 text-right">Revenue (₹)</th>
                    <th className="p-3.5 text-center">Rating</th>
                    <th className="p-3.5 pr-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {filteredRecords.map((item) => (
                    <tr
                      key={item.bookId}
                      className="hover:bg-muted/40 transition-colors group"
                    >
                      {/* Book Title & Cover */}
                      <td className="p-3.5 pl-4">
                        <div className="flex items-center gap-3 max-w-xs">
                          <img
                            src={item.book.image}
                            alt={item.book.title}
                            className="w-9 h-12 object-contain rounded shadow-sm shrink-0 bg-white p-0.5 border border-border/40"
                          />
                          <div>
                            <Link
                              to={`/books/${item.book.id}`}
                              onClick={onClose}
                              className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1"
                            >
                              {item.book.title}
                            </Link>
                            <p className="text-[11px] text-muted-foreground line-clamp-1">
                              {item.book.authors}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* ISBN */}
                      <td className="p-3.5 font-mono text-[11px] text-muted-foreground">
                        {item.book.isbn}
                      </td>

                      {/* Downloads */}
                      <td className="p-3.5 text-center">
                        <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold px-2.5 py-1 rounded-full border border-emerald-500/20">
                          <Download className="w-3 h-3" />
                          {item.downloadsCount}
                        </span>
                      </td>

                      {/* Orders */}
                      <td className="p-3.5 text-center">
                        <span className="font-mono font-bold text-foreground">
                          {item.ordersCount}
                        </span>
                        <span className="text-[10px] text-muted-foreground block">
                          ({item.ebookOrdersCount} eB / {item.paperbackOrdersCount} Pb)
                        </span>
                      </td>

                      {/* Revenue */}
                      <td className="p-3.5 text-right font-mono font-bold text-foreground">
                        ₹{item.totalRevenueINR.toLocaleString()}
                      </td>

                      {/* Rating & Reviews */}
                      <td className="p-3.5 text-center">
                        <div className="inline-flex items-center gap-1 text-amber-500 font-bold">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span>{item.averageRating}</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground block">
                          ({item.reviewCount} rev)
                        </span>
                      </td>

                      {/* Action */}
                      <td className="p-3.5 pr-4 text-center">
                        <Button
                          asChild
                          size="sm"
                          variant="ghost"
                          className="h-8 text-[11px] font-bold text-primary hover:text-accent gap-1"
                        >
                          <Link to={`/books/${item.book.id}`} onClick={onClose}>
                            View <ExternalLink className="w-3 h-3" />
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: VISUAL TRENDS & CHARTS */}
        {activeTab === "charts" && (
          <div className="space-y-8 pt-4">
            {/* Downloads Chart */}
            <Card className="p-6 bg-card border border-border/70 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                    <Download className="w-4 h-4 text-emerald-500" />
                    Top Downloaded & Read Titles
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Number of digital eBook & research monograph downloads
                  </p>
                </div>
              </div>

              <div className="h-[250px] w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topDownloadedData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} interval={0} angle={-15} textAnchor="end" />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip
                      formatter={(val: any) => [`${val} downloads`, "Downloads"]}
                      labelFormatter={(_: any, payload: any) =>
                        payload?.[0]?.payload?.fullName || ""
                      }
                      contentStyle={{
                        backgroundColor: "#1e293b",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "12px",
                        color: "#fff",
                      }}
                    />
                    <Bar dataKey="downloads" fill="#10b981" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Revenue Chart */}
            <Card className="p-6 bg-card border border-border/70 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-500" />
                    Direct Sales Revenue by Title (INR)
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Direct purchases processed via Razorpay Gateway
                  </p>
                </div>
              </div>

              <div className="h-[250px] w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topRevenueData} margin={{ top: 10, right: 10, left: -10, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} interval={0} angle={-15} textAnchor="end" />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip
                      formatter={(val: any) => [`₹${Number(val).toLocaleString()}`, "Revenue"]}
                      labelFormatter={(_: any, payload: any) =>
                        payload?.[0]?.payload?.fullName || ""
                      }
                      contentStyle={{
                        backgroundColor: "#1e293b",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "12px",
                        color: "#fff",
                      }}
                    />
                    <Bar dataKey="revenue" fill="#f59e0b" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        )}

        {/* TAB 3: ORDER AUDIT LOG */}
        {activeTab === "orders" && (
          <div className="space-y-4 pt-4">
            {orders.length > 0 ? (
              <div className="border border-border/70 rounded-2xl overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-muted/70 text-muted-foreground uppercase text-[10px] tracking-wider font-bold border-b border-border/60">
                    <tr>
                      <th className="p-3 pl-4">Order ID</th>
                      <th className="p-3">Book Title</th>
                      <th className="p-3">Edition</th>
                      <th className="p-3">Customer</th>
                      <th className="p-3 text-right">Amount</th>
                      <th className="p-3 pr-4 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-muted/30">
                        <td className="p-3 pl-4 font-mono font-bold text-primary">
                          {order.id}
                        </td>
                        <td className="p-3 font-semibold text-foreground max-w-xs truncate">
                          {order.bookTitle}
                        </td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              order.edition === "ebook"
                                ? "bg-emerald-500/10 text-emerald-600"
                                : "bg-primary/10 text-primary"
                            }`}
                          >
                            {order.edition === "ebook" ? "eBook" : "Paperback"}
                          </span>
                        </td>
                        <td className="p-3 text-muted-foreground">
                          {order.customerName}
                          <span className="text-[10px] block opacity-70">
                            {order.customerEmail}
                          </span>
                        </td>
                        <td className="p-3 text-right font-mono font-bold">
                          ₹{order.amount}
                        </td>
                        <td className="p-3 pr-4 text-center">
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                            <CheckCircle2 className="w-3 h-3" /> Confirmed
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <Card className="p-8 text-center bg-card border border-border/60 rounded-2xl space-y-2">
                <ShoppingBag className="w-10 h-10 text-muted-foreground/60 mx-auto" />
                <h5 className="font-bold text-base text-foreground">
                  No orders recorded yet in this session
                </h5>
                <p className="text-xs text-muted-foreground">
                  Direct orders placed via Razorpay will be logged and analyzed in real-time here.
                </p>
              </Card>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
