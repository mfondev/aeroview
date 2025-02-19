import { useQuery } from '@tanstack/react-query'

const url = 'https://fakestoreapi.com/products'
export const fetchFlights = async () => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch flights')
  }
  return response.json()
}

export const useGetFlights = () => {
  return useQuery({ queryKey: ['flights'], queryFn: fetchFlights })
}
