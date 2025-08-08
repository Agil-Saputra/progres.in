"use client";
import React, { useState, useEffect } from "react";
import { DashboardSidebar } from "@/layout/dashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Globe,
  QrCode,
  Download,
  Copy,
  CheckCircle,
  XCircle,
  Clock,
  ExternalLink,
  Pencil,
  Link,
} from "lucide-react";

export default function Publish() {
  const [website, setWebsite] = useState(null);
  const [customUrl, setCustomUrl] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [useCustomDomain, setUseCustomDomain] = useState(false);
  const [customDomain, setCustomDomain] = useState("");
  const [isDomainEditing, setIsDomainEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const loadData = async () => {
      setIsLoading(true);
      
      // Add a small delay to show skeleton loading
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Get website data from localStorage
      const websiteData = localStorage.getItem("websiteToPublish");
      if (websiteData) {
        const parsed = JSON.parse(websiteData);
        setWebsite(parsed);
        setCustomUrl(parsed.url);

        // Check if custom domain is already set
        if (parsed.customDomain) {
          setCustomDomain(parsed.customDomain);
          setUseCustomDomain(true);
          generateQRCode(parsed.customDomain);
        } else {
          generateQRCode(parsed.url);
        }
      }
      
      setIsLoading(false);
    };

    loadData();
  }, []);

  const generateQRCode = async (url) => {
    // In a real app, you'd use a QR code library like qrcode
    // For now, we'll use a placeholder API
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
      `https://${url}`
    )}`;
    setQrCodeDataUrl(qrApiUrl);
  };

  const handleUrlChange = () => {
    if (website) {
      const updatedWebsite = { ...website, url: customUrl };
      setWebsite(updatedWebsite);
      localStorage.setItem("websiteToPublish", JSON.stringify(updatedWebsite));
      if (!useCustomDomain) {
        generateQRCode(customUrl);
      }
      setIsEditing(false);
    }
  };

  const handleCustomDomainChange = () => {
    if (website) {
      const updatedWebsite = {
        ...website,
        customDomain: useCustomDomain ? customDomain : null,
      };
      setWebsite(updatedWebsite);
      localStorage.setItem("websiteToPublish", JSON.stringify(updatedWebsite));

      // Update QR code based on domain choice
      if (useCustomDomain && customDomain) {
        generateQRCode(customDomain);
      } else {
        generateQRCode(website.url);
      }

      setIsDomainEditing(false);
    }
  };

  const getCurrentUrl = () => {
    return useCustomDomain && customDomain ? customDomain : website?.url;
  };

  const copyToClipboard = async (text) => {
    try {
      const urlToCopy = text || getCurrentUrl();
      await navigator.clipboard.writeText(`https://${urlToCopy}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const downloadQRCode = () => {
    if (qrCodeDataUrl) {
      const link = document.createElement("a");
      link.href = qrCodeDataUrl;
      link.download = `qr-code-${website?.title || "website"}.png`;
      link.click();
    }
  };

  const getStatusInfo = () => {
    if (!website) return { status: "draft", color: "gray", text: "Draft" };

    // Simulate different statuses based on creation time
    const createdAt = new Date(website.createdAt);
    const now = new Date();
    const diffMinutes = (now - createdAt) / (1000 * 60);

    if (diffMinutes < 1) {
      return {
        status: "publishing",
        color: "yellow",
        text: "Sedang Dipublikasi",
        icon: Clock,
      };
    } else if (diffMinutes < 5) {
      return {
        status: "published",
        color: "blue",
        text: "Aktif",
        icon: CheckCircle,
      };
    } else {
      return {
        status: "published",
        color: "green",
        text: "Aktif",
        icon: CheckCircle,
      };
    }
  };

  // Skeleton Loading Component
  const SkeletonLoader = () => (
    <div>
      <DashboardSidebar>
        <div className="p-6 space-y-6">
          {/* Website Status Card Skeleton */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Skeleton className="w-5 h-5" />
                <Skeleton className="w-32 h-5" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start justify-between">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex items-center gap-4">
                    <Skeleton className="w-16 h-16 rounded-lg" />
                    <div className="space-y-2">
                      <Skeleton className="w-48 h-6" />
                      <Skeleton className="w-64 h-4" />
                      <Skeleton className="w-40 h-3" />
                    </div>
                  </div>
                  <div className="w-full">
                    <Skeleton className="w-full h-16 rounded-lg" />
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <Skeleton className="w-20 h-6 rounded-full" />
                  <Skeleton className="w-24 h-3" />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* URL Management Card Skeleton */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Skeleton className="w-5 h-5" />
                  <Skeleton className="w-24 h-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Skeleton className="w-40 h-4" />
                  <div className="flex items-center gap-2">
                    <Skeleton className="flex-1 h-10" />
                    <Skeleton className="w-12 h-10" />
                  </div>
                </div>
                
                <div className="border-t pt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-4 h-4" />
                    <Skeleton className="w-36 h-4" />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Skeleton className="flex-1 h-10" />
                  <Skeleton className="w-20 h-10" />
                </div>

                <Skeleton className="w-full h-16 rounded-lg" />
              </CardContent>
            </Card>

            {/* QR Code Card Skeleton */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Skeleton className="w-5 h-5" />
                  <Skeleton className="w-16 h-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="inline-block p-4 bg-white border rounded-lg shadow-sm">
                    <Skeleton className="w-48 h-48 mx-auto" />
                  </div>
                </div>

                <Skeleton className="w-full h-10" />
                <Skeleton className="w-full h-16 rounded-lg" />
              </CardContent>
            </Card>
          </div>
        </div>
      </DashboardSidebar>
    </div>
  );

  // Show skeleton loading while data is being loaded
  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (!website) {
    return (
      <div>
        <DashboardSidebar>
          <div className="p-6">
            <Card>
              <CardContent className="text-center py-12">
                <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Belum Ada Website
                </h2>
                <p className="text-gray-600 mb-4">
                  Buat website terlebih dahulu untuk melihat status publikasi
                </p>
                <Button
                  onClick={() => (window.location.href = "/create-website")}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Buat Website Baru
                </Button>
              </CardContent>
            </Card>
          </div>
        </DashboardSidebar>
      </div>
    );
  }

  const statusInfo = getStatusInfo();
  const StatusIcon = statusInfo.icon;

  return (
    <div>
      <DashboardSidebar>
        <div className="p-6 space-y-6">
          {/* Website Status Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Status Website
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start justify-between">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 grid place-items-center p-2 rounded-lg">
                      <Globe className="w-12 h-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {website.title}
                      </h3>
                      <p className="text-gray-600">{website.description}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Dibuat dengan template {website.template?.name}
                      </p>
                    </div>
                  </div>

                  {/* Current Active URL Display */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                    <p className="text-sm text-gray-700">
                      <strong>URL Aktif:</strong>
                      <span className="ml-2 text-blue-600 font-mono text-xs">
                        https://{getCurrentUrl()}
                      </span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {useCustomDomain
                        ? "Website dapat diakses melalui domain kustom Anda"
                        : "Website dapat diakses melalui subdomain progres.in"}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge
                    variant={
                      statusInfo.color === "green" ? "default" : "secondary"
                    }
                    className={`
                      ${
                        statusInfo.color === "green"
                          ? "bg-green-100 text-green-800 border-green-200"
                          : ""
                      }
                      ${
                        statusInfo.color === "yellow"
                          ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                          : ""
                      }
                      ${
                        statusInfo.color === "gray"
                          ? "bg-gray-100 text-gray-800 border-gray-200"
                          : ""
                      }
                      flex items-center gap-1 px-3 py-1
                    `}
                  >
                    {StatusIcon && <StatusIcon className="w-3 h-3" />}
                    {statusInfo.text}
                  </Badge>
                  <p className="text-xs text-gray-500 mt-1">
                    Dipublikasi{" "}
                    {new Date(website.createdAt).toLocaleDateString("id-ID")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* URL Management Card */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  URL Website
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Default progres.in URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alamat Website (progres.in)
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 flex items-center">
                      <span className="text-gray-500 text-sm mr-1">
                        https://
                      </span>
                      {isEditing ? (
                        <Input
                          value={customUrl}
                          onChange={(e) => setCustomUrl(e.target.value)}
                          className="flex-1"
                          placeholder="nama-website.progres.in"
                        />
                      ) : (
                        <span className="flex-1 py-2 px-3 bg-gray-50 border rounded-md text-sm">
                          {website.url}
                        </span>
                      )}
                    </div>
                    {isEditing ? (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={handleUrlChange}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Simpan
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setIsEditing(false);
                            setCustomUrl(website.url);
                          }}
                        >
                          Batal
                        </Button>
                      </div>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setIsEditing(true)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Custom Domain Section */}
                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 mb-4">
                    <input
                      type="checkbox"
                      id="useCustomDomain"
                      checked={useCustomDomain}
                      onChange={(e) => {
                        setUseCustomDomain(e.target.checked);
                        if (!e.target.checked) {
                          setCustomDomain("");
                          setIsDomainEditing(false);
                          handleCustomDomainChange();
                        }
                      }}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor="useCustomDomain"
                      className="text-sm font-medium text-gray-700 flex items-center gap-2"
                    >
                      <Link className="w-4 h-4" />
                      Gunakan Domain Sendiri
                    </label>
                  </div>

                  {useCustomDomain && (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Domain Kustom
                        </label>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 flex items-center">
                            <span className="text-gray-500 text-sm mr-1">
                              https://
                            </span>
                            {isDomainEditing || !customDomain ? (
                              <Input
                                value={customDomain}
                                onChange={(e) =>
                                  setCustomDomain(e.target.value)
                                }
                                className="flex-1"
                                placeholder="www.domain-anda.com"
                              />
                            ) : (
                              <span className="flex-1 py-2 px-3 bg-blue-50 border border-blue-200 rounded-md text-sm text-blue-800">
                                {customDomain}
                              </span>
                            )}
                          </div>
                          {isDomainEditing || !customDomain ? (
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                onClick={() => {
                                  handleCustomDomainChange();
                                  setIsDomainEditing(false);
                                }}
                                className="bg-blue-600 hover:bg-blue-700"
                                disabled={!customDomain.trim()}
                              >
                                Simpan
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  setIsDomainEditing(false);
                                  setCustomDomain(website.customDomain || "");
                                }}
                              >
                                Batal
                              </Button>
                            </div>
                          ) : (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setIsDomainEditing(true)}
                            >
                              <Pencil className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-sm text-blue-800 mb-3">
                          <strong>Tutorial: Cara Setup Domain Sendiri</strong>
                        </p>
                        <div className="aspect-video w-full rounded-lg overflow-hidden mb-3">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/1oErYLXH9XU?si=B70eEpF50D9Fk3vb"
                            title="Tutorial Setup Domain Kustom"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => copyToClipboard()}
                    className="flex-1"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    {copied ? "Tersalin!" : "Salin URL"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      window.open(`https://${getCurrentUrl()}`, "_blank")
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Buka
                  </Button>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-800">
                    <strong>Tips:</strong> URL yang mudah diingat akan
                    memudahkan pelanggan menemukan website Anda.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* QR Code Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="w-5 h-5" />
                  QR Code
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="inline-block p-4 bg-white border rounded-lg shadow-sm">
                    {qrCodeDataUrl ? (
                      <img
                        src={qrCodeDataUrl}
                        alt="QR Code"
                        className="w-48 h-48 mx-auto"
                      />
                    ) : (
                      <div className="w-48 h-48 bg-gray-100 rounded flex items-center justify-center">
                        <QrCode className="w-12 h-12 text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  onClick={downloadQRCode}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={!qrCodeDataUrl}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download QR Code
                </Button>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-800">
                    <strong>Info:</strong> Pelanggan dapat memindai QR Code ini
                    untuk langsung mengakses website Anda.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DashboardSidebar>
    </div>
  );
}
