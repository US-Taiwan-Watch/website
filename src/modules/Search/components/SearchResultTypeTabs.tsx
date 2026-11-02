'use client'

import UButton from '@/common/components/atoms/UButton'
import UHStack from '@/common/components/atoms/UHStack'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import useAccountLayout from '@/modules/Account/hooks/useAccountLayout'
import { SearchResultType } from '@/modules/Search/business/SearchResult'
import useSearchResultsStore from '@/modules/Search/hooks/useSearchResultsStore'
import { Box } from '@mui/material'
import { memo, useMemo } from 'react'

const TabCount = ({ count }: { count: number }) => {
  const { isCompactView } = useAccountLayout()

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'common.black',
        borderRadius: '25px',
        px: '4.8px !important',
        py: '1.6px !important',
        fontSize: isCompactView ? '8px !important' : '9.6px !important',
        fontWeight: 500,
      }}
    >
      {count}
    </Box>
  )
}

type SearchResultTypeTab = {
  label: string
  value: SearchResultType | null
  count: number
}

type SearchResultTypeTabsProps = {
  value: SearchResultType | null
  onTabClick: (value: SearchResultType | null) => void
}

const SearchResultTypeTabs = memo(function SearchResultTypeTabs({
  value,
  onTabClick,
}: SearchResultTypeTabsProps) {
  const searchResultTotalMap = useSearchResultsStore.use.searchResultTotalMap()
  const { t } = useTranslationClient('search')
  const { isCompactView } = useAccountLayout()

  const tabs = useMemo<SearchResultTypeTab[]>(() => {
    if (!searchResultTotalMap) return []

    return [
      {
        label: t('tabs.all.title', { ns: 'search' }),
        value: null,
        count:
          searchResultTotalMap.people +
          searchResultTotalMap.bills +
          searchResultTotalMap.articles +
          searchResultTotalMap.ketagalans,
      },
      {
        label: t('tabs.bill.title', { ns: 'search' }),
        value: SearchResultType.Bill,
        count: searchResultTotalMap.bills,
      },
      {
        label: t('tabs.people.title', { ns: 'search' }),
        value: SearchResultType.People,
        count: searchResultTotalMap.people,
      },
      {
        label: t('tabs.article.title', { ns: 'search' }),
        value: SearchResultType.Article,
        count: searchResultTotalMap.articles,
      },
      {
        label: t('tabs.ketagalan.title', { ns: 'search' }),
        value: SearchResultType.Ketagalan,
        count: searchResultTotalMap.ketagalans,
      },
    ].filter((tab) => tab.count > 0)
  }, [t, searchResultTotalMap])

  return (
    <Box overflow="auto" width="100%">
      <UHStack gap={1} width="fit-content">
        {tabs.map((tab) => (
          <UButton
            key={tab.value}
            variant="contained"
            color="info"
            rounded
            onClick={() => {
              if (value === tab.value) {
                onTabClick(null)
                return
              }

              onTabClick(tab.value)
            }}
            sx={{
              ...(value &&
                value !== tab.value && {
                  opacity: 0.5,
                }),
              whiteSpace: 'nowrap',
              flexShrink: 0,
              px: isCompactView ? '8px !important' : '12px !important',
              py: isCompactView ? '6px !important' : '7.2px !important',
              fontSize: isCompactView ? '12px !important' : '12.8px !important',
              fontWeight: 500,
            }}
            endIcon={<TabCount count={tab.count} />}
            size="small"
          >
            {tab.label}
          </UButton>
        ))}
      </UHStack>
    </Box>
  )
})

export default SearchResultTypeTabs
