'use client'
import React, { useState, useRef } from 'react'
import { DashboardSidebar } from '@/layout/dashboardLayout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Camera, 
} from 'lucide-react'

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: 'Dara Saraswati',
    email: 'darasaraswati@gmail.com',
    phone: '089876000543',
    address: 'Bandeharja RW.16 RT.01',
    province: 'Jawa Barat',
    city: 'Kota Yogyakarta',
    currentPassword: '',
    newPassword: ''
  })
  const [editData, setEditData] = useState(profileData)
  const [profileImage, setProfileImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQiq5Ru4dIiXlzLl3-GtAyks3Bi3NHPCmQQ&s')
  const fileInputRef = useRef(null)

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = () => {
    setProfileData(editData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData(profileData)
    setIsEditing(false)
  }

  return (
    <div>
      <DashboardSidebar>
        <div className="p-6">
          <Card className="border-0 bg-white shadow-none">
            <CardContent className="p-8">
              {/* Profile Image Section */}
              <div className="flex flex-col items-center mb-8">
                <div className="relative group mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm">
                    <img 
                      src={profileImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={handleImageClick}
                    className="absolute -bottom-1 -right-1 w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <Camera className="w-3 h-3 text-white" />
                  </button>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
                <h1 className="text-xl font-semibold text-blue-600 mb-1">
                  {profileData.name}
                </h1>
                <p className="text-sm text-gray-500">{profileData.email}</p>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                {/* Personal Information Section */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-4">Profil</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Nama */}
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Nama
                      </label>
                      <Input
                        value={editData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="h-9 text-sm border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                        placeholder="Dara Saraswati"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={editData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="h-9 text-sm border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                        placeholder="darasaraswati@gmail.com"
                      />
                    </div>

                    {/* No Telepon */}
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        No Telp
                      </label>
                      <Input
                        value={editData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="h-9 text-sm border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                        placeholder="089876000543"
                      />
                    </div>

                    {/* Provinsi */}
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Provinsi
                      </label>
                      <Input
                        value={editData.province}
                        onChange={(e) => handleInputChange('province', e.target.value)}
                        className="h-9 text-sm border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                        placeholder="Jawa Barat"
                      />
                    </div>

                    {/* Alamat */}
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Alamat
                      </label>
                      <Input
                        value={editData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="h-9 text-sm border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                        placeholder="Bandeharja RW.16 RT.01"
                      />
                    </div>

                    {/* Kota */}
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Kota
                      </label>
                      <Input
                        value={editData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="h-9 text-sm border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                        placeholder="Kota Yogyakarta"
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 pt-4">
                  <Button 
                    onClick={handleCancel}
                    variant="outline"
                    className="px-6 h-9 text-sm border-gray-200 text-gray-600 hover:bg-gray-50"
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleSave}
                    className="px-6 h-9 text-sm bg-blue-600 hover:bg-blue-700"
                  >
                    Simpan
                  </Button>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 my-6"></div>

                {/* Password Section */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-4">Kata Sandi</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Kata Sandi Saat Ini */}
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Kata Sandi
                      </label>
                      <Input
                        type="password"
                        value={editData.currentPassword}
                        onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                        className="h-9 text-sm border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                        placeholder="••••••••"
                      />
                    </div>

                    {/* Kata Sandi Baru */}
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Kata Sandi Baru
                      </label>
                      <Input
                        type="password"
                        value={editData.newPassword}
                        onChange={(e) => handleInputChange('newPassword', e.target.value)}
                        className="h-9 text-sm border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>

                {/* Password Action Buttons */}
                <div className="flex justify-end gap-3">
                  <Button 
                    variant="outline"
                    className="px-6 h-9 text-sm border-gray-200 text-gray-600 hover:bg-gray-50"
                  >
                    Cancel
                  </Button>
                  <Button 
                    className="px-6 h-9 text-sm bg-blue-600 hover:bg-blue-700"
                  >
                    Simpan
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardSidebar>
    </div>
  )
}
