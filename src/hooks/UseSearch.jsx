/***
 * This hook provides a simple way to handle search functionality.
 * It filters items based on a search query across multiple fields.
 * 
 * Is used in:
 * - News.jsx
 */

import { useState, useEffect } from 'react'

const UseSearch = (items, searchFields) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredItems(items);
      return;
    }

    const filtered = items.filter(item => {
      const searchLower = searchQuery.toLowerCase();
      return searchFields.some(field => {
        const fieldValue = item[field];
        return fieldValue && fieldValue.toLowerCase().includes(searchLower);
      });
    });
    setFilteredItems(filtered);
  }, [searchQuery, items, searchFields]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return { searchQuery, filteredItems, handleSearch };
}

export default UseSearch 