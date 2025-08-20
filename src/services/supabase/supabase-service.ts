import { supabase } from "./supabase-client"

export const SupabaseService = {
  async getDrivers() {
    const { data, error } = await supabase.from('drivers').select('id, name, team:driver_team(team_name)')

    if (error) throw error

    return data
  }
}