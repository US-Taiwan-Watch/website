// ID,ideology,leadership,name,party,description,introduced_bills_118,cosponsored_bills_118,unique_cosponsors_118,total_cosponsors_118
// 412190,0.4314942780813201,0.45784150523314754,McCarthy,Republican,centrist Republican,11,9,73,83
// 412655,0.9257012095969221,0.5966136074678073,Babin,Republican,conservative Republican,13,380,148,190

import fs from 'fs'
import path from 'path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

/** 未來可能會在 Azure Blob Storage 上 */
const inputFilePath = path.join(__dirname, '../public/data/ideology.txt')
const outputFilePath = path.join(
  __dirname,
  '../src/modules/People/assets/data/ideology.json'
)

if (!fs.existsSync(outputFilePath)) {
  fs.mkdirSync(path.dirname(outputFilePath), { recursive: true })
  fs.writeFileSync(outputFilePath, '')
}

const data = fs.readFileSync(inputFilePath, 'utf8')

const lines = data.trim().split('\r\n')
const headers = lines[0].split(',')

/**
 * Output:
 * [
 *   { ID: '412190', ideology: '0.4314942780813201', leadership: '0.45784150523314754', name: 'McCarthy', party: 'Republican', description: 'centrist Republican', introduced_bills_118: '11', cosponsored_bills_118: '9', unique_cosponsors_118: '73', total_cosponsors_118: '83' },
 *   ...
 * ]
 */
const jsonData = lines.slice(1).map((line) => {
  const values = line.split(',')
  return headers.reduce((obj, header, index) => {
    obj[header] = values[index]
    return obj
  }, {})
})

/**
 * Output:
 * {
 *   Democratic: [...],
 *   Republican: [...],
 *   Independents: [...],
 * }
 */
const groupedData = jsonData.reduce(
  (acc, item) => {
    if (item.party === 'Republican') {
      acc[item.party] = acc[item.party] || []
      acc[item.party].push(item)
    } else if (item.party === 'Democrat') {
      /**
       * ideology 的 source data 民主黨是 Democrat，
       * 本專案民主黨為 Democratic
       * 因此需要做特例轉換
       */
      acc.Democratic = acc.Democratic || []
      acc.Democratic.push({
        ...item,
        party: 'Democratic',
      })
    } else {
      acc.Independent = acc.Independent || []
      acc.Independent.push(item)
    }
    return acc
  },
  // 手動定義 legend 排序
  {
    Democratic: [],
    Republican: [],
    Independent: [],
  }
)

// Write the JSON data to the output file
fs.writeFileSync(outputFilePath, JSON.stringify(groupedData, null, 2))
