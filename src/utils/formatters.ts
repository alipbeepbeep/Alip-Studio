export const formatIDR = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(amount).replace(/\s/g, ' ');
};

export const calculateDaysBetween = (startStr: string, endStr: string): number => {
  if (!startStr || !endStr) return 1;
  const start = new Date(startStr);
  const end = new Date(endStr);
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return 1;
  
  // Set both to midnight to compare days accurately
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);
  
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // inclusive of start & end day
  return diffDays > 0 ? diffDays : 1;
};

export const getDefaultDateRange = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 2); // 3 days rental by default
  
  const formatDate = (d: Date) => d.toISOString().split('T')[0];
  return {
    startDate: formatDate(today),
    endDate: formatDate(tomorrow)
  };
};
