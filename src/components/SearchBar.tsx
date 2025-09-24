import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a city..."
          className="w-full px-6 py-4 pl-14 text-lg rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white/50 transition-all"
        />
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
      </div>
      
      <button
        type="submit"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-xl transition-colors backdrop-blur-sm"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;