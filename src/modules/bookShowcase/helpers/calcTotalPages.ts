const calcTotalPages = (total: string | undefined): number => Math.ceil(Number(total ?? 1) / 10)

export default calcTotalPages