export default function usePagination(
  totalResults: number,
  currentPage: number
) {
    
  let startResult, endResult, showNext, showPrev;
  if (totalResults <= 10) {
    startResult = 1;
    endResult = totalResults;
  } else {
    startResult = currentPage == 1 ? 1 : currentPage * 10 - 9;
    endResult =
      startResult + 9 > totalResults
        ? totalResults - startResult
        : startResult + 9;
  }

  showPrev = currentPage === 1 ? false : true;
  showNext = endResult === totalResults ? false : true;
  return { startResult, endResult, showNext, showPrev };
}
