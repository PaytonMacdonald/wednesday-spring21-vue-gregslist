import { AppState } from '../AppState.js'
import { api } from './AxiosService.js'

class HousesService {
  async getHouses() {
    const res = await api.get('houses')
    AppState.houses = res.data
  }
}

export const housesService = new HousesService()
