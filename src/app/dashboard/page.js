'use client'
import React, { useState, useEffect } from 'react'
import { DashboardSidebar } from '@/layout/dashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Package, 
  Eye,
  MessageCircle,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Calendar,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react'

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('7d');
  const [visitorData, setVisitorData] = useState([]);
  const [whatsappData, setWhatsappData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data generation with realistic patterns
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      
      // Add a delay to show skeleton loading
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Generate visitor data for the last 7 days with realistic patterns
      const generateVisitorData = () => {
        const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
        // Base visitor counts with weekend patterns (lower on weekends)
        const baseVisitors = [420, 485, 512, 467, 589, 234, 187];
        
        return days.map((day, index) => ({
          day,
          visitors: baseVisitors[index] + Math.floor(Math.random() * 50) - 25, // Add some variance
          pageViews: Math.floor(baseVisitors[index] * 2.3) + Math.floor(Math.random() * 100),
        }));
      };

      // Generate WhatsApp click data with realistic hourly patterns
      const generateWhatsappData = () => {
        const hours = ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
        // Peak hours tend to have more clicks
        const baseClicks = [8, 28, 45, 35, 52, 23];
        
        return hours.map((hour, index) => ({
          time: hour,
          clicks: baseClicks[index] + Math.floor(Math.random() * 10) - 5, // Add variance
        }));
      };

      const visitorResult = generateVisitorData();
      const whatsappResult = generateWhatsappData();
      
      console.log('Generated visitor data:', visitorResult);
      console.log('Generated WhatsApp data:', whatsappResult);
      
      setVisitorData(visitorResult);
      setWhatsappData(whatsappResult);
      setIsLoading(false);
    };

    loadData();
  }, [timeRange]);

  // Device demographics data - using single blue color scheme
  const deviceData = [
    { device: 'Mobile', percentage: 65, color: 'bg-blue-500' },
    { device: 'Desktop', percentage: 25, color: 'bg-blue-400' },
    { device: 'Tablet', percentage: 10, color: 'bg-blue-300' },
  ];

  // Age demographics data - using single green color scheme
  const ageData = [
    { age: '18-24', percentage: 25, color: 'bg-green-500' },
    { age: '25-34', percentage: 35, color: 'bg-green-400' },
    { age: '35-44', percentage: 25, color: 'bg-green-300' },
    { age: '45+', percentage: 15, color: 'bg-green-200' },
  ];

  const StatCard = ({ title, value, change, icon: Icon, trend, color }) => (
    <Card className="relative overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
        <Icon className={`h-4 w-4 ${color}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="flex items-center mt-1">
          {trend === 'up' ? (
            <ArrowUpRight className="h-3 w-3 text-green-600 mr-1" />
          ) : (
            <ArrowDownRight className="h-3 w-3 text-red-600 mr-1" />
          )}
          <p className={`text-xs ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {change} dari minggu lalu
          </p>
        </div>
      </CardContent>
    </Card>
  );

  const BarChart = ({ data, dataKey, color }) => {
    if (!data || data.length === 0) return <div className="h-32 flex items-center justify-center text-gray-400">Loading data...</div>;
    
    const maxValue = Math.max(...data.map(d => d[dataKey]));
    
    return (
      <div className="flex items-end space-x-2 h-32">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div 
              className={`w-full ${color} rounded-t transition-all duration-500 hover:opacity-80`}
              style={{ 
                height: `${(item[dataKey] / maxValue) * 100}px`,
                minHeight: '8px'
              }}
            ></div>
            <span className="text-xs text-gray-600 mt-1">
              {item.day || item.time || item.label || `${index + 1}`}
            </span>
          </div>
        ))}
      </div>
    );
  };

  // Skeleton Loading Component for Dashboard
  const DashboardSkeletonLoader = () => (
    <div>
      <DashboardSidebar>
        <div className="p-6 space-y-6">
          {/* Header Skeleton */}
          <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center gap-4">
            <div className="flex gap-2">
              <Skeleton className="w-20 h-8" />
              <Skeleton className="w-20 h-8" />
              <Skeleton className="w-20 h-8" />
            </div>
          </div>

          {/* Main Stats Cards Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <Skeleton className="w-24 h-4" />
                  <Skeleton className="w-4 h-4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="w-16 h-6 mb-2" />
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-4 h-4" />
                    <Skeleton className="w-20 h-3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Charts Skeleton */}
            {[1, 2].map((index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Skeleton className="w-5 h-5" />
                      <Skeleton className="w-32 h-5" />
                    </div>
                    <Skeleton className="w-40 h-4" />
                  </div>
                  <div className="text-right">
                    <Skeleton className="w-16 h-6 mb-1" />
                    <Skeleton className="w-20 h-3" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end space-x-2 h-32">
                    {[1, 2, 3, 4, 5, 6].map((bar) => (
                      <div key={bar} className="flex flex-col items-center flex-1">
                        <Skeleton className="w-full h-20 mb-2" />
                        <Skeleton className="w-8 h-3" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Demographics Cards Skeleton */}
            {[1, 2, 3].map((index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Skeleton className="w-5 h-5" />
                    <Skeleton className="w-32 h-5" />
                  </div>
                  <Skeleton className="w-40 h-4" />
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="space-y-2">
                      <div className="flex justify-between">
                        <Skeleton className="w-16 h-4" />
                        <Skeleton className="w-8 h-4" />
                      </div>
                      <Skeleton className="w-full h-2 rounded-full" />
                    </div>
                  ))}
                  <div className="pt-2 border-t">
                    <div className="flex justify-between">
                      <Skeleton className="w-20 h-4" />
                      <Skeleton className="w-12 h-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </DashboardSidebar>
    </div>
  );

  // Show skeleton loading while data is being loaded
  if (isLoading) {
    return <DashboardSkeletonLoader />;
  }

  const ProgressBar = ({ label, percentage, color }) => (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">{label}</span>
        <span className="font-medium">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full ${color} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
  return (
    <div>
      <DashboardSidebar>
        <div className="p-6 space-y-6">
          {/* Header with Time Range Selector */}
          <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center gap-4">
            <div className="flex gap-2">
              {['24h', '7d', '30d'].map((range) => (
                <Button
                  key={range}
                  variant={timeRange === range ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTimeRange(range)}
                  className={timeRange === range ? 'bg-blue-600 hover:bg-blue-700' : ''}
                >
                  {range === '24h' ? '24 Jam' : range === '7d' ? '7 Hari' : '30 Hari'}
                </Button>
              ))}
            </div>
          </div>

          {/* Main Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Total Pengunjung"
              value="2,847"
              change="+12.5%"
              trend="up"
              icon={Eye}
              color="text-blue-600"
            />
            <StatCard
              title="Klik WhatsApp"
              value="324"
              change="+8.2%"
              trend="up"
              icon={MessageCircle}
              color="text-blue-600"
            />
            <StatCard
              title="Halaman Dilihat"
              value="8,921"
              change="+15.3%"
              trend="up"
              icon={Globe}
              color="text-blue-600"
            />
            <StatCard
              title="Bounce Rate"
              value="23.4%"
              change="-5.1%"
              trend="up"
              icon={TrendingUp}
              color="text-blue-600"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Visitor Traffic Chart */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    Traffic Pengunjung
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">Jumlah pengunjung harian</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">
                    {visitorData.length > 0 ? visitorData.reduce((sum, item) => sum + item.visitors, 0).toLocaleString() : '0'}
                  </div>
                  <p className="text-xs text-gray-500">Total minggu ini</p>
                </div>
              </CardHeader>
              <CardContent>
                <BarChart data={visitorData} dataKey="visitors" color="bg-gradient-to-t from-blue-400 to-blue-600" />
              </CardContent>
            </Card>

            {/* WhatsApp Clicks Chart */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                    Interaksi WhatsApp
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">Klik tombol WhatsApp per jam</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    {whatsappData.length > 0 ? whatsappData.reduce((sum, item) => sum + item.clicks, 0) : '0'}
                  </div>
                  <p className="text-xs text-gray-500">Total hari ini</p>
                </div>
              </CardHeader>
              <CardContent>
                <BarChart data={whatsappData} dataKey="clicks" color="bg-gradient-to-t from-green-400 to-green-600" />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Device Demographics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-blue-600" />
                  Demografi Perangkat
                </CardTitle>
                <p className="text-sm text-gray-600">Jenis perangkat pengunjung</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {deviceData.map((item, index) => (
                  <ProgressBar
                    key={index}
                    label={item.device}
                    percentage={item.percentage}
                    color={item.color}
                  />
                ))}
                <div className="pt-2 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Perangkat</span>
                    <span className="font-medium">2,847</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Age Demographics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Demografi Usia
                </CardTitle>
                <p className="text-sm text-gray-600">Rentang usia pengunjung</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {ageData.map((item, index) => (
                  <ProgressBar
                    key={index}
                    label={item.age}
                    percentage={item.percentage}
                    color={item.color}
                  />
                ))}
                <div className="pt-2 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Usia Rata-rata</span>
                    <span className="font-medium">32 tahun</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Real-time Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  Statistik Real-time
                </CardTitle>
                <p className="text-sm text-gray-600">Data pengunjung saat ini</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Online Sekarang</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">47</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Pengunjung hari ini</span>
                    <span className="font-medium">467</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Halaman populer</span>
                    <span className="font-medium text-blue-600">Homepage</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Sumber traffic</span>
                    <span className="font-medium text-purple-600">Instagram (45%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Konversi WhatsApp</span>
                    <span className="font-medium text-green-600">11.1%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </DashboardSidebar>
    </div>
  )
}
