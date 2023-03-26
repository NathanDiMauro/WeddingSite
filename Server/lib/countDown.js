module.exports.countdown = () => {
    const currentDate = new Date();
    const weddingDate = new Date('August 30, 2024 04:00:00');
  
    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;
  
    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(currentDate - weddingDate);
  
    // Convert back to days and return
    return (Math.round(differenceMs / ONE_DAY)+1).toString();
}