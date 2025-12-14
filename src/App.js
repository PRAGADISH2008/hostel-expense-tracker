/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import Tesseract from 'tesseract.js';
import {
  Calendar,
  Wallet,
  TrendingUp,
  PieChart,
  Download,
  Trash2,
  Plus,
  Mic,
  Camera,
  Settings,
  LogOut,
  User,
  Bell,
  Target,
  DollarSign,
  BarChart3,
  HelpCircle,
  RefreshCw,
  FileText,
  CreditCard,
  Eye,
  EyeOff,
} from 'lucide-react';
import {
  PieChart as RechartsPie,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

const ExpenseTrackerApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('1234');
  const [currentUser, setCurrentUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const [expenses, setExpenses] = useState([]);
  const [monthlyLimit, setMonthlyLimit] = useState(0);
  const [savingsGoal, setSavingsGoal] = useState(0);
  const [subscriptions, setSubscriptions] = useState([]);
  const [language, setLanguage] = useState('en');
  const [loggingStreak, setLoggingStreak] = useState(0);
  const [lastExpenseDate, setLastExpenseDate] = useState(null);

  const [loginUser, setLoginUser] = useState('admin');
  const [loginPass, setLoginPass] = useState('1234');
  const [formDate, setFormDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [formNote, setFormNote] = useState('');
  const [formCategory, setFormCategory] = useState('');
  const [formAmount, setFormAmount] = useState('');
  const [formSplit, setFormSplit] = useState('onlyme');

  const [showChart, setShowChart] = useState(false);
  const [showDues, setShowDues] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showFlowchart, setShowFlowchart] = useState(false);

  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [subName, setSubName] = useState('');
  const [subAmount, setSubAmount] = useState('');
  const [subDueDate, setSubDueDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [subRepeat, setSubRepeat] = useState('One-time');

// Replace with:
 useEffect(() => {
   if (expenses?.length > 0 || monthlyLimit > 0) {  // Only save meaningful data
     const data = { expenses, monthlyLimit, savingsGoal, subscriptions, loggingStreak,       lastExpenseDate };
     localStorage.setItem('hostelTrackerData', JSON.stringify(data));
   }
 }, [expenses, monthlyLimit, savingsGoal, subscriptions, loggingStreak, lastExpenseDate]);

  const LANG = {
    en: {
      title: 'Hostel Expense Tracker',
      subtitle: 'with Roommate Split',
      login: 'Login',
      logout: 'Logout',
      username: 'Username',
      password: 'Password',
      addExpense: 'Add Expense',
      date: 'Date',
      note: 'Note',
      category: 'Category',
      amount: 'Amount',
      onlyMe: 'Only Me',
      shared: 'Shared with Roommate',
      monthlyLimit: 'Monthly Limit',
      savingsGoal: 'Savings Goal',
      totalSpent: 'Total Spent',
      remaining: 'Remaining',
      roommateBalance: 'Roommate Balance',
      withinLimit: 'Within limit',
      overLimit: 'Over limit',
      noLimit: 'No limit set',
      showChart: 'Show Chart',
      exportCSV: 'Export CSV',
      dues: 'Bills & Dues',
      deleteSelected: 'Delete',
      newMonth: 'New Month',
      voiceAdd: 'Voice Add',
      scanReceipt: 'Scan Receipt',
      settings: 'Settings',
      help: 'Help',
      topCategories: 'Top Categories',
      avgPerDay: 'Average per day',
      savingsProgress: 'Savings Progress',
      flowchart: 'Limit Flowchart',
      recentExpenses: 'Recent Expenses',
      noExpenses: 'No expenses yet. Add your first one!',
      changePassword: 'Change Password',
      upcomingBills: 'Upcoming Bills',
      addBill: 'Add Bill',
      billName: 'Bill Name',
      dueDate: 'Due Date',
      repeat: 'Repeat',
    },
    ta: {
      title: 'ஹாஸ்டல் செலவு டிராக்கர்',
      subtitle: 'ரூம்மேட்டுடன் பகிர்வு',
      login: 'உள்நுழை',
      logout: 'வெளியேறு',
      username: 'பயனர்பெயர்',
      password: 'கடவுச்சொல்',
      addExpense: 'செலவு சேர்',
      date: 'தேதி',
      note: 'குறிப்பு',
      category: 'வகை',
      amount: 'தொகை',
      onlyMe: 'எனக்கு மட்டும்',
      shared: 'ரூம்மேட்டுடன் பகிர்',
      monthlyLimit: 'மாத வரம்பு',
      savingsGoal: 'சேமிப்பு இலக்கு',
      totalSpent: 'மொத்த செலவு',
      remaining: 'மீதமுள்ளது',
      roommateBalance: 'ரூம்மேட் இருப்பு',
      withinLimit: 'வரம்புக்குள்',
      overLimit: 'வரம்பு மீறப்பட்டது',
      noLimit: 'வரம்பு அமைக்கப்படவில்லை',
      showChart: 'வரைபடம்',
      exportCSV: 'CSV ஏற்றுமதி',
      dues: 'பில் & சரக்குகள்',
      deleteSelected: 'அழி',
      newMonth: 'புதிய மாதம்',
      voiceAdd: 'வாய்ஸ் சேர்',
      scanReceipt: 'ரசீது ஸ்கேன்',
      settings: 'அமைப்புகள்',
      help: 'உதவி',
      topCategories: 'சிறந்த வகைகள்',
      avgPerDay: 'ஒரு நாளுக்கு சராசரி',
      savingsProgress: 'சேமிப்பு முன்னேற்றம்',
      flowchart: 'வரம்பு புலம்',
      recentExpenses: 'சமீபத்திய செலவுகள்',
      noExpenses: 'இன்னும் செலவுகள் இல்லை. முதலில் ஒன்றைச் சேர்க்கவும்!',
      changePassword: 'கடவுச்சொல் மாற்று',
      upcomingBills: 'வரவிருக்கும் பில்கள்',
      addBill: 'பில் சேர்',
      billName: 'பில் பெயர்',
      dueDate: 'கடைசி தேதி',
      repeat: 'மீண்டும்',
    },
  };

  const CATEGORIES = {
    en: {
      food: '🍚 Food',
      mess: '🍲 Mess',
      snacks: '🥪 Snacks',
      transport: '🚌 Transport',
      recharge: '📱 Recharge',
      stationery: '📚 Stationery',
      rent: '🏠 Rent',
      utilities: '⚡ Utilities',
      health: '💊 Health',
      entertainment: '🎬 Entertainment',
      clothes: '👕 Clothes',
      personal_care: '🧴 Personal care',
      others: '❓ Others',
    },
    ta: {
      food: '🍚 உணவு',
      mess: '🍲 மெஸ்',
      snacks: '🥪 ஸ்னாக்ஸ்',
      transport: '🚌 போக்குவரத்து',
      recharge: '📱 ரீசார்ஜ்',
      stationery: '📚 ஸ்டேஷனரி',
      rent: '🏠 வாடகை',
      utilities: '⚡ பயன்பாடுகள்',
      health: '💊 உடல்நலம்',
      entertainment: '🎬 பொழுதுபோக்கு',
      clothes: '👕 ஆடைகள்',
      personal_care: '🧴 தனிப்பட்ட பராமரிப்பு',
      others: '❓ மற்றவை',
    },
  };

  const CATEGORY_KEYWORDS = {
    food: [
      'food',
      'meal',
      'lunch',
      'dinner',
      'breakfast',
      'biryani',
      'rice',
      'curry',
      'hotel',
      'restaurant',
    ],
    mess: ['mess', 'mess bill', 'mess fee', 'canteen'],
    snacks: ['snack', 'chips', 'biscuit', 'chocolate', 'ice cream', 'juice', 'samosa'],
    transport: ['bus', 'train', 'auto', 'cab', 'taxi', 'uber', 'ola', 'petrol', 'fuel'],
    recharge: ['recharge', 'mobile', 'data', 'prepaid', 'postpaid'],
    stationery: ['pen', 'pencil', 'notebook', 'book', 'xerox', 'printout'],
    rent: ['rent', 'room rent', 'house', 'hostel rent'],
    utilities: ['electricity', 'water', 'wifi', 'internet', 'gas', 'cylinder'],
    health: ['medicine', 'tablet', 'doctor', 'hospital', 'clinic', 'pharmacy'],
    entertainment: ['movie', 'cinema', 'netflix', 'prime', 'spotify', 'game'],
    clothes: ['shirt', 'pant', 'dress', 'shoe', 'slipper'],
    personal_care: ['soap', 'shampoo', 'toothpaste', 'cream', 'salon', 'haircut'],
  };

  const t = LANG[language];
  const categories = CATEGORIES[language];

  const autoCategorize = (note) => {
    const lowerNote = note.toLowerCase();
    for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
      if (keywords.some((kw) => lowerNote.includes(kw))) {
        return category;
      }
    }
    return 'others';
  };

  const handleLogin = () => {
    if (loginUser === username && loginPass === password) {
      setCurrentUser(loginUser);
      setIsLoggedIn(true);
      checkUpcomingBills();
    } else {
      alert('❌ Invalid credentials! Default: admin / 1234');
    }
  };

  const checkUpcomingBills = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = subscriptions.map((sub) => {
    const dueDate = new Date(sub.dueDate);
    dueDate.setHours(0, 0, 0, 0);
    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return { ...sub, daysLeft: diffDays };
  }).filter(sub => sub.daysLeft >= 0 && sub.daysLeft <= 3);

  if (upcoming.length > 0) {
    const billList = upcoming
      .map((s) => {
        let urgency = '';
        if (s.daysLeft === 0) urgency = '🔴 TODAY!';
        else if (s.daysLeft === 1) urgency = '🟠 TOMORROW';
        else if (s.daysLeft === 2) urgency = '🟡 In 2 days';
        else urgency = `🟢 In ${s.daysLeft} days`;
        
        return `${urgency}\n${s.name}: ₹${s.amount} on ${s.dueDate}`;
      })
      .join('\n\n');
    setTimeout(
      () =>
        alert(`⚠️ Upcoming Bills Alert:\n\n${billList}`),
      500
    );
  }
};

 
    const checkSavingsWarning = (newTotal) => {
    if (monthlyLimit <= 0 || savingsGoal <= 0) return;

    const remaining = monthlyLimit - newTotal;

    if (remaining >= savingsGoal) {
      // still above goal, do nothing
      return;
    }

    setTimeout(
      () =>
        alert(
          '🚨 SAVINGS DEPLETED!\n\nYou are using savings money:\n₹' +
            remaining.toFixed(2) +
            ' left (goal: ₹' +
            savingsGoal.toFixed(2) +
            ')'
        ),
      200
    );
  };

    
  const addExpense = () => {
    if (!formAmount || parseFloat(formAmount) <= 0) {
      alert('❌ Please enter a valid amount');
      return;
    }

    const newExpense = {
      id: Date.now(),
      date: formDate,
      note: formNote || 'Expense',
      category:
        formCategory || (formNote ? autoCategorize(formNote) : 'others'),
      amount: parseFloat(formAmount),
      splitType: formSplit,
    };

    setExpenses([...expenses, newExpense]);
    setFormNote('');
    setFormCategory('');
    setFormAmount('');

    const expenseDate = new Date(formDate);
    if (!lastExpenseDate) {
      setLoggingStreak(1);
    } else {
      const lastDate = new Date(lastExpenseDate);
      const diffDays = Math.floor(
        (expenseDate - lastDate) / (1000 * 60 * 60 * 24)
      );
      if (diffDays === 1) {
        const newStreak = loggingStreak + 1;
        setLoggingStreak(newStreak);
        if ([3, 7, 30].includes(newStreak)) {
          const badges = {
            3: '3-day starter!',
            7: '1 week streak!',
            30: '30-day champion!',
          };
          setTimeout(
            () =>
              alert(
                `🏆 Logging Streak: ${newStreak} days!\n${badges[newStreak]}`
              ),
            300
          );
        }
      } else if (diffDays > 1) {
        setLoggingStreak(1);
      }
    }
    setLastExpenseDate(formDate);

    const total = [...expenses, newExpense].reduce(
      (sum, e) => sum + e.amount,
      0
    );
    if (monthlyLimit > 0 && total > monthlyLimit) {
      setTimeout(
        () =>
          alert(
            `⚠️ Monthly Limit Exceeded!\n\nTotal: ₹${total.toFixed(
              2
            )}\nLimit: ₹${monthlyLimit.toFixed(2)}`
          ),
        100
      );
    }
  
    checkSavingsWarning(total);

    alert('✅ Expense added successfully!');
  };

  const deleteExpense = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('🗑️ Delete this expense?')) {
      setExpenses(expenses.filter((e) => e.id !== id));
      alert('✅ Expense deleted');
    }
  };

  const newMonth = () => {
    // eslint-disable-next-line no-restricted-globals
    if (
      confirm(
        '🆕 Start New Month?\n\nThis will clear current expenses (data stays in browser storage)'
      )
    ) {
      setExpenses([]);
      alert('✅ New month started! Previous data cleared.');
    }
  };

  const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);
  const remaining = monthlyLimit - totalSpent;
  const spentPercent =
    monthlyLimit > 0 ? Math.min((totalSpent / monthlyLimit) * 100, 150) : 0;

  const roommateBalance = expenses
    .filter((e) => e.splitType === 'shared')
    .reduce((sum, e) => sum + e.amount / 2, 0);

  const savedAmount =
    monthlyLimit > 0 ? Math.max(monthlyLimit - totalSpent, 0) : 0;
  const savingsPercent =
    savingsGoal > 0
      ? Math.min((savedAmount / savingsGoal) * 100, 100)
      : 0;

  const categoryData = Object.keys(categories)
    .map((key) => {
      const total = expenses
        .filter((e) => e.category === key)
        .reduce((sum, e) => sum + e.amount, 0);
      return { name: categories[key], value: total, key };
    })
    .filter((d) => d.value > 0);

  const topCategories = categoryData
    .sort((a, b) => b.value - a.value)
    .slice(0, 3)
    .map((d) => `${d.name}: ₹${d.value.toFixed(0)}`)
    .join(', ');

  const uniqueDates = [...new Set(expenses.map((e) => e.date))];
  const avgPerDay =
    uniqueDates.length > 0 ? totalSpent / uniqueDates.length : 0;

  const exportCSV = () => {
    const headers = ['Date', 'Category', 'Amount', 'Note', 'Split Type'];
    const rows = expenses.map((e) => [
      e.date,
      e.category,
      e.amount,
      e.note,
      e.splitType,
    ]);
    const csv = [headers, ...rows].map((row) => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `expenses_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    alert('✅ Expenses exported to CSV!');
  };

  const voiceAdd = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert(
        '❌ Voice recognition not supported in this browser.\n\nPlease use Chrome, Edge, or Safari.'
      );
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = language === 'en' ? 'en-IN' : 'ta-IN';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    let isListening = true;

    recognition.onstart = () => {
      const timeout = setTimeout(() => {
        if (isListening) {
          recognition.stop();
          alert('⏱️ Listening timeout. Please try again.');
        }
      }, 10000);
      timeout.toString();
    };

    recognition.onresult = (event) => {
      isListening = false;
      const transcript = event.results[0][0].transcript.toLowerCase();

      let amount = null;
      const patterns = [
        /(\d+)\s*(?:rupees?|rs|रुपए|रुपये)/i,
        /(?:rupees?|rs)\s*(\d+)/i,
        /(\d+)\s*(?:for|spent|paid)/i,
        /(\d+)/,
      ];

      for (const pattern of patterns) {
        const match = transcript.match(pattern);
        if (match && match[1]) {
          amount = match[1];
          break;
        }
      }

      if (amount && parseFloat(amount) > 0) {
        const category = autoCategorize(transcript);
        const newExpense = {
          id: Date.now(),
          date: new Date().toISOString().split('T')[0],
          note: transcript.charAt(0).toUpperCase() + transcript.slice(1),
          category,
          amount: parseFloat(amount),
          splitType: 'onlyme',
        };

        setExpenses((prev) => [...prev, newExpense]);
        setLastExpenseDate(newExpense.date);

        alert(
          `✅ Voice Expense Added!\n\n₹${amount} - ${
            categories[category]
          }\n"${transcript}"`
        );
      } else {
        alert(
          `❌ Could not detect amount.\n\nYou said: "${transcript}"\n\nTry saying: "50 rupees food" or "120 for auto"`
        );
      }
    };

    recognition.onerror = (event) => {
      isListening = false;

      if (
        event.error === 'not-allowed' ||
        event.error === 'service-not-allowed'
      ) {
        alert(
          '❌ Microphone access denied!\n\nPlease enable microphone permissions in your browser settings.'
        );
      } else if (event.error === 'no-speech') {
        alert('⚠️ No speech detected. Please try again and speak clearly.');
      } else if (event.error === 'network') {
        alert('❌ Network error. Please check your internet connection.');
      } else {
        alert(
          `❌ Voice recognition error: ${event.error}\n\nPlease try again.`
        );
      }
    };

    recognition.onend = () => {
      isListening = false;
    };

    try {
      recognition.start();
      alert(
        '🎤 Listening...\n\nSpeak now:\n"50 rupees food"\n"120 for auto"\n"80 snacks"'
      );
    } catch (error) {
      alert('❌ Could not start voice recognition. Please try again.');
    }
  };
  
  const scanReceipt = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment';

    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      try {
        alert('🔍 Scanning receipt with OCR...\n\nSupported:\n• Restaurant bills\n• Store receipts\n• Invoices\n• Handwritten notes\n• Price tags');

        const {
          data: { text },
        } = await Tesseract.recognize(file, 'eng+tam', {
          logger: (m) => console.log(m),
        });

        // Enhanced amount detection patterns
        const amountPatterns = [
          /total[\s:]*₹?(\d+(?:[,.\s]\d{1,3})*(?:\.\d{2})?)/i,
          /amount[\s:]*₹?(\d+(?:[,.\s]\d{1,3})*(?:\.\d{2})?)/i,
          /₹[\s]*(\d+(?:[,.\s]\d{1,3})*(?:\.\d{2})?)/,
          /rs[\s.]*(\d+(?:[,.\s]\d{1,3})*(?:\.\d{2})?)/i,
          /grand\s*total[\s:]*₹?(\d+(?:[,.\s]\d{1,3})*(?:\.\d{2})?)/i,
          /net\s*amount[\s:]*₹?(\d+(?:[,.\s]\d{1,3})*(?:\.\d{2})?)/i,
          /(\d+(?:[,.\s]\d{1,3})*(?:\.\d{2})?)\s*(?:rs|rupees|only)/i,
          /payable[\s:]*₹?(\d+(?:[,.\s]\d{1,3})*(?:\.\d{2})?)/i,
        ];

        let extractedAmount = null;
        for (const pattern of amountPatterns) {
          const match = text.match(pattern);
          if (match && match[1]) {
            extractedAmount = match[1].replace(/[,\s]/g, '');
            break;
          }
        }

        const cleanedText = text.replace(/\s+/g, ' ').trim();
        const category = autoCategorize(cleanedText);

        // Extract merchant/shop name from first line
        const lines = cleanedText.split('\n').filter(l => l.trim());
        const merchantName = lines[0]?.slice(0, 50) || 'Receipt scan';

        setFormNote(merchantName);
        setFormAmount(extractedAmount || '');
        setFormCategory(category);
        setFormDate(new Date().toISOString().split('T')[0]);

        alert(
          `✅ OCR Complete!\n\n📝 Note: "${merchantName}"\n💰 Amount: ₹${
            extractedAmount || 'Not detected'
          }\n🏷️ Category: ${
            categories[category]
          }\n\nForm auto-filled! Review and save.`
        );
      } catch (error) {
        alert(
          '❌ OCR failed. Falling back to manual entry.\n' + error.message
        );

        const note = prompt('Enter expense description:');
        const amount = prompt('Enter amount:');

        if (note && amount) {
          setFormNote(note);
          setFormAmount(amount);
          setFormCategory(autoCategorize(note));
        }
      }
    };

    input.click();
  };


  const addSubscription = () => {
    if (!subName || !subAmount) {
      alert('❌ Please enter bill name and amount');
      return;
    }

    const newSub = {
      id: Date.now(),
      name: subName,
      amount: parseFloat(subAmount),
      dueDate: subDueDate,
      repeat: subRepeat,
    };

    setSubscriptions([...subscriptions, newSub]);
    setSubName('');
    setSubAmount('');
    alert(`✅ Bill "${subName}" added!`);
  };

  const deleteSubscription = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('🗑️ Delete this bill?')) {
      setSubscriptions(subscriptions.filter((s) => s.id !== id));
      alert('✅ Bill deleted');
    }
  };

  const updateCredentials = () => {
    if (!newUsername || newUsername.length < 3) {
      alert('❌ Username must be 3+ characters');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('❌ Passwords do not match');
      return;
    }
    if (newPassword.length < 4) {
      alert('❌ Password must be 4+ characters');
      return;
    }

    setUsername(newUsername);
    setPassword(newPassword);
    setCurrentUser(newUsername);
    alert('✅ Credentials updated!\n\nUse new credentials on next login.');
    setShowSettings(false);
  };

  const CHART_COLORS = [
    '#8b5cf6',
    '#ec4899',
    '#f59e0b',
    '#10b981',
    '#3b82f6',
    '#ef4444',
  ];

  // ---------------- LOGIN SCREEN -----------------
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-6">
        <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500">
              <Wallet className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-lg font-semibold tracking-tight text-white">
              {t.title}
            </h1>
            <p className="mt-1 text-xs text-slate-400">{t.subtitle}</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-300">
                {t.username}
              </label>
              <input
                type="text"
                value={loginUser}
                onChange={(e) => setLoginUser(e.target.value)}
                placeholder="admin"
                className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-slate-300">
                {t.password}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  placeholder="1234"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 pr-10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                  type="button"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              onClick={handleLogin}
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:from-purple-600 hover:to-pink-600"
            >
              {t.login}
            </button>

            <p className="pt-1 text-center text-[11px] text-slate-500">
              Default credentials: admin / 1234
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- MAIN APP -----------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Header */}
        <header className="border-b border-slate-800 bg-slate-900/80">
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <Wallet className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-sm font-semibold tracking-tight">
                  {t.title}
                </h1>
                <p className="text-[11px] text-slate-400">{t.subtitle}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {loggingStreak > 0 && (
                <div className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-300">
                  🔥 {loggingStreak} day streak
                </div>
              )}

              <button
                onClick={() =>
                  setLanguage(language === 'en' ? 'ta' : 'en')
                }
                className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 hover:border-purple-500 hover:text-white"
                type="button"
              >
                {language === 'en' ? 'EN · TA' : 'TA · EN'}
              </button>

              <button
                onClick={() => setShowHelp(true)}
                className="rounded-full p-1.5 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                title="Help"
                type="button"
              >
                <HelpCircle className="h-4 w-4" />
              </button>

              <button
                onClick={() => setShowSettings(true)}
                className="rounded-full p-1.5 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                title="Settings"
                type="button"
              >
                <Settings className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-200">
                <User className="h-3.5 w-3.5 text-emerald-400" />
                <span>{currentUser}</span>
              </div>

              <button
                onClick={() => {
                  // eslint-disable-next-line no-restricted-globals
                  if (confirm('🚪 Logout?')) {
                    setIsLoggedIn(false);
                    setCurrentUser(null);
                  }
                }}
                className="rounded-full p-1.5 text-red-400 hover:bg-red-500/10 hover:text-red-300"
                title="Logout"
                type="button"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </header>

        <div className="px-4 py-4 space-y-4">
          {/* Limit & Goal */}
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <label className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-300">
                <DollarSign className="h-4 w-4 text-purple-400" />
                {t.monthlyLimit}
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={monthlyLimit || ''}
                  onChange={(e) =>
                    setMonthlyLimit(parseFloat(e.target.value) || 0)
                  }
                  placeholder="5000"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent"
                />
                <button
                  onClick={() =>
                    alert(
                      `✅ Monthly limit set to ₹${monthlyLimit.toFixed(2)}`
                    )
                  }
                  className="rounded-xl bg-purple-500 px-4 py-2 text-xs font-semibold text-white hover:bg-purple-600"
                  type="button"
                >
                  Save
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <label className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-300">
                <Target className="h-4 w-4 text-emerald-400" />
                {t.savingsGoal}
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={savingsGoal || ''}
                  onChange={(e) =>
                    setSavingsGoal(parseFloat(e.target.value) || 0)
                  }
                  placeholder="2000"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent"
                />
                <button
                  onClick={() =>
                    alert(
                      `✅ Savings goal set to ₹${savingsGoal.toFixed(2)}`
                    )
                  }
                  className="rounded-xl bg-emerald-500 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-600"
                  type="button"
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard cards */}
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-purple-500/15 via-slate-900 to-slate-900 p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xs font-medium text-slate-200">
                  {t.totalSpent}
                </h3>
                <TrendingUp className="h-4 w-4 text-purple-300" />
              </div>
              <p className="mb-1 text-2xl font-semibold">
                ₹{totalSpent.toFixed(2)}
              </p>
              {monthlyLimit > 0 ? (
                <>
                  <div className="mb-1 h-1.5 w-full rounded-full bg-slate-800">
                    <div
                      className={`h-1.5 rounded-full transition-all ${
                        spentPercent > 100
                          ? 'bg-red-500'
                          : spentPercent > 75
                          ? 'bg-amber-400'
                          : 'bg-emerald-500'
                      }`}
                      style={{
                        width: `${Math.min(spentPercent, 100)}%`,
                      }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-300">
                    {remaining >= 0
                      ? `₹${remaining.toFixed(2)} ${t.remaining}`
                      : `₹${Math.abs(remaining).toFixed(2)} over`}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {spentPercent > 100 ? t.overLimit : t.withinLimit}
                  </p>
                </>
              ) : (
                <p className="text-[11px] text-slate-400">{t.noLimit}</p>
              )}
            </div>

            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-sky-500/15 via-slate-900 to-slate-900 p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xs font-medium text-slate-200">
                  {t.roommateBalance}
                </h3>
                <User className="h-4 w-4 text-sky-300" />
              </div>
              <p className="mb-1 text-2xl font-semibold">
                ₹{roommateBalance.toFixed(2)}
              </p>
              <p className="text-[11px] text-slate-300">
                {roommateBalance > 0
                  ? 'Roommate owes you'
                  : roommateBalance < 0
                  ? 'You owe roommate'
                  : 'All settled!'}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-emerald-500/15 via-slate-900 to-slate-900 p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xs font-medium text-slate-200">
                  {t.savingsProgress}
                </h3>
                <Target className="h-4 w-4 text-emerald-300" />
              </div>
              <p className="mb-1 text-2xl font-semibold">
                ₹{savedAmount.toFixed(2)}
              </p>
              {savingsGoal > 0 ? (
                <>
                  <div className="mb-1 h-1.5 w-full rounded-full bg-slate-800">
                    <div
                      className="h-1.5 rounded-full bg-emerald-500 transition-all"
                      style={{ width: `${savingsPercent}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-300">
                    {savingsPercent.toFixed(0)}% of ₹{savingsGoal}
                  </p>
                </>
              ) : (
                <p className="text-[11px] text-slate-400">
                  Set a savings goal above
                </p>
              )}
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-[11px] text-slate-400">{t.topCategories}</p>
              <p className="mt-1 text-sm text-slate-100">
                {topCategories || 'No data yet'}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-[11px] text-slate-400">{t.avgPerDay}</p>
              <p className="mt-1 text-sm text-slate-100">
                ₹{avgPerDay.toFixed(2)}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-[11px] text-slate-400">Total entries</p>
              <p className="mt-1 text-sm text-slate-100">
                {expenses.length} expenses
              </p>
            </div>
          </div>

          {/* Add expense */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <div className="mb-3 flex items-center justify-between gap-2">
              <h2 className="flex items-center gap-2 text-sm font-semibold">
                <Plus className="h-4 w-4 text-purple-400" />
                {t.addExpense}
              </h2>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={voiceAdd}
                  className="inline-flex items-center gap-1 rounded-xl bg-red-500/15 px-3 py-1 text-xs text-red-200 hover:bg-red-500/25"
                  type="button"
                >
                  <Mic className="h-3.5 w-3.5" />
                  {t.voiceAdd}
                </button>
                <button
                  onClick={scanReceipt}
                  className="inline-flex items-center gap-1 rounded-xl bg-amber-500/15 px-3 py-1 text-xs text-amber-200 hover:bg-amber-500/25"
                  type="button"
                >
                  <Camera className="h-3.5 w-3.5" />
                  {t.scanReceipt}
                </button>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
              <div>
                <label className="mb-1 block text-[11px] text-slate-300">
                  <Calendar className="mr-1 inline h-3 w-3" />
                  {t.date}
                </label>
                <input
                  type="date"
                  value={formDate}
                  onChange={(e) => setFormDate(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent"
                />
              </div>

              <div>
                <label className="mb-1 block text-[11px] text-slate-300">
                  {t.note}
                </label>
                <input
                  type="text"
                  value={formNote}
                  onChange={(e) => {
                    setFormNote(e.target.value);
                    if (e.target.value && !formCategory) {
                      setFormCategory(autoCategorize(e.target.value));
                    }
                  }}
                  placeholder="Lunch at canteen"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent"
                />
              </div>

              <div>
                <label className="mb-1 block text-[11px] text-slate-300">
                  {t.category}
                </label>
                <select
                  value={formCategory}
                  onChange={(e) => setFormCategory(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent"
                >
                  <option value="">Auto-detect</option>
                  {Object.entries(categories).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-[11px] text-slate-300">
                  {t.amount}
                </label>
                <input
                  type="number"
                  value={formAmount}
                  onChange={(e) => setFormAmount(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addExpense()}
                  placeholder="150"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent"
                />
              </div>

              <div>
                <label className="mb-1 block text-[11px] text-slate-300">
                  Split
                </label>
                <select
                  value={formSplit}
                  onChange={(e) => setFormSplit(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent"
                >
                  <option value="onlyme">👤 {t.onlyMe}</option>
                  <option value="shared">🤝 {t.shared}</option>
                </select>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={addExpense}
                className="flex-1 min-w-[160px] rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:from-purple-600 hover:to-pink-600"
                type="button"
              >
                Save expense
              </button>

              <button
                onClick={() => setShowChart(true)}
                className="inline-flex items-center gap-1 rounded-xl bg-slate-800 px-4 py-2 text-xs font-medium text-slate-100 hover:bg-slate-700"
                type="button"
              >
                <PieChart className="h-4 w-4" />
                {t.showChart}
              </button>

              <button
                onClick={exportCSV}
                className="inline-flex items-center gap-1 rounded-xl bg-slate-800 px-4 py-2 text-xs font-medium text-slate-100 hover:bg-slate-700"
                type="button"
              >
                <Download className="h-4 w-4" />
                {t.exportCSV}
              </button>

              <button
                onClick={() => setShowDues(true)}
                className="inline-flex items-center gap-1 rounded-xl bg-slate-800 px-4 py-2 text-xs font-medium text-slate-100 hover:bg-slate-700"
                type="button"
              >
                <Bell className="h-4 w-4" />
                {t.dues}
              </button>

              <button
                onClick={() => setShowFlowchart(true)}
                className="inline-flex items-center gap-1 rounded-xl bg-slate-800 px-4 py-2 text-xs font-medium text-slate-100 hover:bg-slate-700"
                type="button"
              >
                <BarChart3 className="h-4 w-4" />
                {t.flowchart}
              </button>

              <button
                onClick={newMonth}
                className="inline-flex items-center gap-1 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-medium text-white hover:bg-emerald-700"
                type="button"
              >
                <RefreshCw className="h-4 w-4" />
                {t.newMonth}
              </button>
            </div>
          </div>

          {/* Expenses list */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <h2 className="mb-3 text-sm font-semibold">{t.recentExpenses}</h2>
            <div className="max-h-[360px] space-y-2 overflow-y-auto pr-1">
              {expenses.length === 0 ? (
                <div className="py-10 text-center text-sm text-slate-400">
                  {t.noExpenses}
                </div>
              ) : (
                expenses
                  .slice()
                  .reverse()
                  .map((expense) => (
                    <div
                      key={expense.id}
                      className="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3 hover:border-slate-600 hover:bg-slate-900/80"
                    >
                      <div className="flex flex-1 items-center gap-3">
                        <div className="text-2xl">
                          {categories[expense.category]?.split(' ')[0] ||
                            '❓'}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm text-slate-100">
                            {expense.note}
                          </p>
                          <p className="mt-0.5 text-[11px] text-slate-400">
                            {expense.date} · {categories[expense.category]} ·{' '}
                            {expense.splitType === 'shared'
                              ? '🤝 Shared'
                              : '👤 Personal'}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-slate-50">
                          ₹{expense.amount.toFixed(2)}
                        </p>
                        {expense.splitType === 'shared' && (
                          <p className="text-[11px] text-sky-300">
                            Your half: ₹{(expense.amount / 2).toFixed(2)}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => deleteExpense(expense.id)}
                        className="ml-1 rounded-lg p-1.5 text-red-400 hover:bg-red-500/10 hover:text-red-300"
                        type="button"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>

        {/* Chart modal */}
        {showChart && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setShowChart(false)}
          >
            <div
              className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-sm font-semibold">
                  Expenses by category
                </h2>
                <button
                  onClick={() => setShowChart(false)}
                  className="text-lg text-slate-400 hover:text-slate-100"
                  type="button"
                >
                  ×
                </button>
              </div>
              {categoryData.length > 0 ? (
                <ResponsiveContainer width="100%" height={320}>
                  <RechartsPie>
                    <Pie
                      data={categoryData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={110}
                      label={(entry) =>
                        `${entry.name.split(' ')[0]} · ₹${entry.value.toFixed(
                          0
                        )}`
                      }
                    >
                      {categoryData.map((entry, index) => (
                        <Cell
                          key={entry.key}
                          fill={
                            CHART_COLORS[index % CHART_COLORS.length]
                          }
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) =>
                        `₹${Number(value).toFixed(2)}`
                      }
                    />
                    <Legend />
                  </RechartsPie>
                </ResponsiveContainer>
              ) : (
                <p className="py-10 text-center text-sm text-slate-400">
                  Add some expenses to see the chart.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Dues modal */}
        {showDues && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setShowDues(false)}
          >
            <div
              className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold">
                  {t.upcomingBills}
                </h2>
                <button
                  onClick={() => setShowDues(false)}
                  className="text-lg text-slate-400 hover:text-slate-100"
                  type="button"
                >
                  ×
                </button>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-2">
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-300">
                      {t.billName}
                    </label>
                    <input
                      type="text"
                      value={subName}
                      onChange={(e) => setSubName(e.target.value)}
                      placeholder="Netflix, Mess fees..."
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-300">
                      {t.amount}
                    </label>
                    <input
                      type="number"
                      value={subAmount}
                      onChange={(e) => setSubAmount(e.target.value)}
                      placeholder="500"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-300">
                      {t.dueDate}
                    </label>
                    <input
                      type="date"
                      value={subDueDate}
                      onChange={(e) => setSubDueDate(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-300">
                      {t.repeat}
                    </label>
                    <select
                      value={subRepeat}
                      onChange={(e) => setSubRepeat(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent"
                    >
                      <option value="One-time">One-time</option>
                      <option value="Monthly">Monthly</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                onClick={addSubscription}
                className="mt-3 w-full rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                type="button"
              >
                {t.addBill}
              </button>

              <div className="mt-3 max-h-52 space-y-2 overflow-y-auto pr-1">
                {subscriptions.length === 0 ? (
                  <p className="py-4 text-center text-sm text-slate-500">
                    No bills added yet.
                  </p>
                ) : (
                  subscriptions.map((sub) => (
                    <div
                      key={sub.id}
                      className="flex items-center justify-between gap-2 rounded-xl border border-slate-800 bg-slate-950/60 p-3"
                    >
                      <div>
                        <p className="text-sm text-slate-100">
                          {sub.name}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          ₹{sub.amount.toFixed(2)} · {sub.dueDate} ·{' '}
                          {sub.repeat}
                        </p>
                      </div>
                      <button
                        onClick={() => deleteSubscription(sub.id)}
                        className="rounded-lg p-1.5 text-red-400 hover:bg-red-500/10 hover:text-red-300"
                        type="button"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* Settings modal */}
        {showSettings && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setShowSettings(false)}
          >
            <div
              className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold">
                  {t.changePassword}
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-lg text-slate-400 hover:text-slate-100"
                  type="button"
                >
                  ×
                </button>
              </div>

              <div className="space-y-2">
                <div>
                  <label className="mb-1 block text-[11px] text-slate-300">
                    Current user
                  </label>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-200">
                    {currentUser}
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-[11px] text-slate-300">
                    New username
                  </label>
                  <input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    placeholder="username"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[11px] text-slate-300">
                    New password
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[11px] text-slate-300">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent"
                  />
                </div>
              </div>

              <button
                onClick={updateCredentials}
                className="mt-3 w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white hover:from-purple-600 hover:to-pink-600"
                type="button"
              >
                Save changes
              </button>
            </div>
          </div>
        )}

        {/* Help modal */}
        {showHelp && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setShowHelp(false)}
          >
            <div
              className="w-full max-w-lg space-y-3 rounded-2xl border border-slate-800 bg-slate-900 p-4 text-sm text-slate-200 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-1 flex items-center justify-between">
                <h2 className="text-sm font-semibold">How to use</h2>
                <button
                  onClick={() => setShowHelp(false)}
                  className="text-lg text-slate-400 hover:text-slate-100"
                  type="button"
                >
                  ×
                </button>
              </div>

              <div className="space-y-2 text-xs text-slate-200">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  <h3 className="mb-1 text-xs font-semibold text-slate-100">
                    Set budget and goal
                  </h3>
                  <p>
                    Choose a monthly limit and optional savings goal to
                    track how much you spend and save.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  <h3 className="mb-1 text-xs font-semibold text-slate-100">
                    Add expenses
                  </h3>
                  <p>
                    Add manually or use voice / receipt scan. Categories
                    auto-detect from your note text.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  <h3 className="mb-1 text-xs font-semibold text-slate-100">
                    Roommate split
                  </h3>
                  <p>
                    Mark an expense as shared to split it equally and see
                    who owes whom.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  <h3 className="mb-1 text-xs font-semibold text-slate-100">
                    Analytics
                  </h3>
                  <p>
                    Use the chart button to see category-wise spending,
                    quick stats, and savings progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Flowchart modal (kept same layout but inside shell) */}
        {showFlowchart && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setShowFlowchart(false)}
          >
            <div
              className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold">Budget flow</h2>
                <button
                  onClick={() => setShowFlowchart(false)}
                  className="text-lg text-slate-400 hover:text-slate-100"
                  type="button"
                >
                  ×
                </button>
              </div>
              <div className="space-y-3 text-xs text-slate-200">
                <div className="flex items-center justify-center gap-3">
                  <div className="rounded-xl border border-sky-500/60 bg-sky-500/10 px-4 py-3 text-center">
                    <div className="text-[11px] text-slate-300">
                      Monthly limit
                    </div>
                    <div className="mt-1 text-lg font-semibold">
                      ₹{monthlyLimit.toFixed(0)}
                    </div>
                  </div>
                  <div className="rounded-xl border border-purple-500/60 bg-purple-500/10 px-4 py-3 text-center">
                    <div className="text-[11px] text-slate-300">
                      Total spent
                    </div>
                    <div className="mt-1 text-lg font-semibold">
                      ₹{totalSpent.toFixed(0)}
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-center">
                  <div className="mb-1 text-sm font-semibold">
                    {spentPercent > 100
                      ? 'OVER LIMIT'
                      : spentPercent > 75
                      ? 'CAUTION'
                      : 'SAFE ZONE'}
                  </div>
                  <div className="mb-2 text-lg">
                    {spentPercent.toFixed(1)}% used
                  </div>
                  <div className="mb-2 h-4 w-full rounded-full bg-slate-800">
                    <div
                      className={`h-4 rounded-full ${
                        spentPercent > 100
                          ? 'bg-red-500'
                          : spentPercent > 75
                          ? 'bg-amber-400'
                          : 'bg-emerald-500'
                      }`}
                      style={{
                        width: `${Math.min(spentPercent, 100)}%`,
                      }}
                    />
                  </div>
                  <div className="text-[11px] text-slate-300">
                    {remaining >= 0
                      ? `Remaining: ₹${remaining.toFixed(2)}`
                      : `Over by ₹${Math.abs(remaining).toFixed(2)}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseTrackerApp;
