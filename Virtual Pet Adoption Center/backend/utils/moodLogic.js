function getMood(createdAt) {
    const diffDays = (Date.now() - new Date(createdAt)) / (1000 * 60 * 60 * 24);
    if (diffDays < 1) return 'Happy';
    if (diffDays <= 3) return 'Excited';
    return 'Sad';
  }
  
  module.exports = { getMood };
  