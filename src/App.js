// src/App.js

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, HelpCircle, Info, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './index.css'; // Import Tailwind CSS

const Card = ({ title, impact, isSelected, onClick, isBarrier }) => (
  <div
    onClick={onClick}
    className={`p-4 rounded-lg cursor-pointer ${
      isSelected
        ? isBarrier 
          ? 'bg-red-50 border-2 border-red-600'
          : 'bg-emerald-50 border-2 border-emerald-600'
        : 'bg-gray-50 hover:bg-gray-100'
    }`}
  >
    <div className="font-medium">{title}</div>
    <div className="text-sm text-gray-600">
      Impact: {impact >= 0 ? '+' : ''}{impact}%
    </div>
  </div>
);

// ... (rest of your code)
