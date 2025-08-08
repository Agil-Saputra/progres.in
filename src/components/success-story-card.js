"use client";

import Image from "next/image";
import { MapPin, BarChart3, Globe, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const SuccessStoryCard = ({ story }) => {
  return (
    <motion.div 
      className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl overflow-hidden max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Left side - Avatar Image */}
      <motion.div 
        className="lg:w-1/3 relative min-h-[400px] lg:min-h-[500px]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={story.avatar}
          alt={story.name}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Right side - Content */}
      <motion.div 
        className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Header */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            {story.name} - {story.business}
          </h3>
          <motion.div 
            className="flex items-center text-blue-600 text-base"
            whileHover={{ scale: 1.05, x: 10 }}
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin className="w-4 h-4 mr-2" />
            </motion.div>
            {story.location}
          </motion.div>
        </motion.div>

        {/* Quote */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div 
            className="border-l-4 border-blue-600 pl-6"
            whileHover={{ paddingLeft: 32 }}
            transition={{ duration: 0.3 }}
          >
            <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic font-medium">
              &ldquo;{story.quote}&rdquo;
            </blockquote>
          </motion.div>
        </motion.div>

        {/* Metrics */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="flex items-center bg-blue-50 rounded-xl p-4"
            whileHover={{ scale: 1.05, backgroundColor: "#dbeafe" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <BarChart3 className="w-5 h-5 text-white" />
            </motion.div>
            <div>
              <motion.div 
                className="text-sm font-semibold text-blue-600"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {story.salesIncrease}
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="flex items-center bg-green-50 rounded-xl p-4"
            whileHover={{ scale: 1.05, backgroundColor: "#dcfce7" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Globe className="w-5 h-5 text-white" />
            </motion.div>
            <div>
              <motion.div 
                className="text-sm font-semibold text-green-600"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                {story.exports}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Read more button */}
        <motion.button 
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 self-start group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
          whileTap={{ scale: 0.95 }}
        >
          Baca Kisah Lengkap
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronRight className="w-4 h-4 ml-2" />
          </motion.div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default SuccessStoryCard;
