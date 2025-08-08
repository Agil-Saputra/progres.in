"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DashboardSidebar } from "@/layout/dashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, X } from "lucide-react";
import Image from "next/image";

export default function CreateWebsite() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTemplates, setFilteredTemplates] = useState([]);

  useEffect(() => {
    const loadTemplates = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFilteredTemplates(templates); // Initialize filtered templates
      setIsLoading(false);
    };

    loadTemplates();
  }, []);

  // Filter templates based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredTemplates(templates);
    } else {
      const filtered = templates.filter(
        (template) =>
          template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          template.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          template.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTemplates(filtered);
    }
  }, [searchQuery]);

  const templates = [
    {
      id: 1,
      name: "Minimalist",
      description: "Desain simpel yang cocok untuk website modern",
      image: "/template-minimalist.png",
      category: "Minimalist",
    },
    {
      id: 2,
      name: "Brutalism",
      description:
        "Desain yang cenderung kasar, mental, dan tidak konvensional.",
      image: "/template-brutalism.png",
      category: "Brutalism",
    },
    {
      id: 3,
      name: "Glassmorphism",
      description: "Desain meniru sifat kaca",
      image: "/template-glassmorphism.png",
      category: "Glassmorphism",
    },
    {
      id: 4,
      name: "Neumorphism",
      description: "Desain yang membuat objek seakan-akan timbul",
      image: "/template-neumorphism.png",
      category: "Neumorphism",
    },
  ];

  const handleTemplateSelect = (template) => {
    // Store selected template in localStorage or pass as query params
    localStorage.setItem("selectedTemplate", JSON.stringify(template));
    router.push("/edit-website");
  };

  // Skeleton Loading Component
  const SkeletonLoader = () => (
    <div>
      <DashboardSidebar>
        <div className="p-6">
          <div className="mb-8">
            <Skeleton className="w-48 h-6 mb-2" />
            <Skeleton className="w-80 h-4 mb-6" />

            {/* Search Bar Skeleton */}
            <div className="mb-6">
              <Skeleton className="w-80 h-10" />
            </div>

            {/* Template Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((index) => (
                <Card key={index} className="border border-gray-200 p-0">
                  <CardContent className="p-0">
                    {/* Template Preview Skeleton */}
                    <div className="relative h-64 bg-gray-100 rounded-t-lg overflow-hidden">
                      <Skeleton className="w-full h-full" />
                    </div>

                    {/* Template Info Skeleton */}
                    <div className="p-4">
                      <Skeleton className="w-32 h-5 mb-2" />
                      <Skeleton className="w-full h-4 mb-2" />
                      <Skeleton className="w-3/4 h-4 mb-4" />
                      <Skeleton className="w-full h-10" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </DashboardSidebar>
    </div>
  );

  // Show skeleton loading while templates are being loaded
  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div>
      <DashboardSidebar>
        <div className="p-6">
          {/* Template & Tampilan Section */}
          <div className="mb-8">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Cari template (nama, deskripsi, kategori)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="text-sm text-gray-600 mt-2">
                  Menampilkan {filteredTemplates.length} template dari{" "}
                  {templates.length} template
                </p>
              )}
            </div>

            {/* Template Grid */}
            {filteredTemplates.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredTemplates.map((template) => (
                  <Card
                    key={template.id}
                    className="group cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-200 p-0"
                  >
                    <CardContent className="p-0">
                      {/* Template Preview */}
                      <div className="relative h-64 bg-gray-100 rounded-t-lg overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                          {template.id === 1 && (
                            // Minimalist Design
                            <div className="w-full h-full bg-white relative">
                              <div className="absolute top-4 left-4 right-4">
                                <div className="flex items-center justify-between">
                                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                                  <div className="flex space-x-4">
                                    <div className="w-16 h-4 bg-gray-300 rounded"></div>
                                    <div className="w-16 h-4 bg-gray-300 rounded"></div>
                                    <div className="w-16 h-4 bg-gray-300 rounded"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute top-20 left-4 right-4">
                                <div className="text-center">
                                  <div className="w-32 h-6 bg-gray-900 mx-auto mb-2 rounded"></div>
                                  <div className="w-48 h-4 bg-gray-400 mx-auto mb-4 rounded"></div>
                                  <div className="w-24 h-8 bg-orange-400 mx-auto rounded"></div>
                                </div>
                              </div>
                              <div className="absolute bottom-4 left-4 right-4">
                                <div className="flex justify-between items-center text-xs">
                                  <span className="text-gray-600">
                                    The Ordinary
                                  </span>
                                  <span className="text-gray-400">
                                    Clinical Formulations with integrity.
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}

                          {template.id === 2 && (
                            // Brutalism Design
                            <div className="w-full h-full bg-gray-900 relative text-white">
                              <div className="absolute top-4 right-4">
                                <div className="w-20 h-6 bg-yellow-400 rounded"></div>
                              </div>
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <div className="text-white font-bold text-lg mb-2">
                                  Creative
                                </div>
                                <div className="text-white text-sm mb-1">
                                  website for
                                </div>
                                <div className="text-white text-sm mb-4">
                                  agency.
                                </div>
                                <div className="w-2 h-2 bg-yellow-400 rounded-full mx-auto"></div>
                              </div>
                              <div className="absolute bottom-4 right-4 text-xs text-gray-300">
                                <div>OUR EXPERIENCE</div>
                              </div>
                            </div>
                          )}

                          {template.id === 3 && (
                            // Glassmorphism Design
                            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 relative">
                              <div className="absolute top-6 left-6">
                                <div className="text-white font-bold text-sm">
                                  telly
                                </div>
                              </div>
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="bg-white/20 backdrop-blur-lg rounded-lg p-4 border border-white/30">
                                  <div className="text-white text-lg font-bold mb-2">
                                    Let's Find Your
                                  </div>
                                  <div className="text-white text-lg font-bold mb-4">
                                    Doctor
                                  </div>
                                  <div className="w-20 h-6 bg-blue-500 rounded"></div>
                                </div>
                              </div>
                              <div className="absolute bottom-4 left-6 text-white text-xs">
                                <div>Now 15 Minutes</div>
                              </div>
                            </div>
                          )}

                          {template.id === 4 && (
                            // Neumorphism Design
                            <div className="w-full h-full bg-gray-200 relative">
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <div className="text-gray-800 text-sm mb-4">
                                  We are Themossburg
                                </div>
                                <div className="flex justify-center space-x-8 mb-6">
                                  <div className="w-8 h-8 bg-gray-200 rounded-full shadow-inner"></div>
                                  <div className="w-8 h-8 bg-gray-200 rounded-full shadow-inner"></div>
                                  <div className="w-8 h-8 bg-gray-200 rounded-full shadow-inner"></div>
                                </div>
                                <div className="text-gray-700 text-xs">
                                  Digital will us decide
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Template Info */}
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {template.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {template.description}
                        </p>
                        <Button
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() => handleTemplateSelect(template)}
                        >
                          Pilih Template
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              // No templates found state
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Template tidak ditemukan
                </h3>
                <p className="text-gray-600 mb-4">
                  Tidak ada template yang cocok dengan pencarian "{searchQuery}"
                </p>
                <Button
                  onClick={() => setSearchQuery("")}
                  variant="outline"
                  className="mx-auto"
                >
                  <X className="w-4 h-4 mr-2" />
                  Hapus Pencarian
                </Button>
              </div>
            )}
          </div>
        </div>
      </DashboardSidebar>
    </div>
  );
}
