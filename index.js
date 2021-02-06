// function superbowlWin(record) {
//   result = record.find(reco => reco.result === "W")
//     if (result){
//       return result.year
    
//     } else {
//       return undefined
//     }
// }
superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}