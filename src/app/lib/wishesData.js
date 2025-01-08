import { supabase } from './supabase'

export const addWish = async (wish) => {
  try {
    const { data, error } = await supabase
      .from('wishes')
      .insert([
        {
          nama: wish.nama,
          ucapan: wish.ucapan,
          kehadiran: wish.kehadiran
        }
      ])
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error adding wish:', error)
    throw error
  }
}

export const getAllWishes = async () => {
  try {
    const { data, error } = await supabase
      .from('wishes')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error getting wishes:', error)
    throw error
  }
}