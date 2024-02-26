import { Bebas_Neue, Kanit } from "next/font/google";

export const fontKanit = Kanit({
    subsets: ["latin"], style: ['normal', 'italic'], weight: ['100', '300', '500', '700']
})

export const fontBebas = Bebas_Neue({
    subsets: ["latin"], style: ['normal'], weight: ['400']
})

