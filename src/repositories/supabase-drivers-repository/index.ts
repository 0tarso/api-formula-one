import { PostgrestResponse, PostgrestSingleResponse } from "@supabase/supabase-js"
import { DriverModel } from "../../models/driver-model"
import { supabase } from "../../services/supabase/supabase-client"

export const findAllDrivers = async (): Promise<DriverModel[]> => {
  const response: PostgrestResponse<DriverModel> = await supabase
    .from('drivers')
    .select('id, name, age, country, team:driver_team(id, team_name)')

  if (response.error) throw response.error

  return response.data
}

export const findDriverById = async (id: number): Promise<DriverModel | undefined> => {
  const response: PostgrestSingleResponse<DriverModel> = await supabase
    .from('drivers')
    .select('id, name, age, country, team:driver_team(id, team_name)')
    .eq('id', id)
    .single()

  if (response.error) throw response.error

  if (!response.data) return

  return response.data
}