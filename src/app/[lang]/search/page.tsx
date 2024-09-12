/**
 * Demo Zustand Store
 */

import SearchBar from '@/common/components/elements/SearchBar'
import ResultBlock from '@/common/components/elements/SearchBar/ResultBlock'

export default function SearchPage() {
  return (
    <div>
      <h1>Search Page</h1>
      <SearchBar />
      <ResultBlock />
    </div>
  )
}
