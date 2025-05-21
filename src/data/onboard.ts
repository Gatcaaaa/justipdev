import { AnimationObject } from "lottie-react-native"

export interface onboardingData {
    id: number,
    animation: AnimationObject
    title: string,
    subtitle: string,
    backgroundColor: string
}

const onboarding: onboardingData[] = [
    {
        id: 1,
        animation: require("../../assets/images/onboarding/onboarding1.json"),
        title: "Fitur Chat Langsung",
        subtitle: "Sistem Chat Yang Terintegrasi",
        backgroundColor: "#FFFFFF"
    },
    {
        id: 2,
        animation: require("../../assets/images/onboarding/onboarding2.json"),
        title: "Pilih Mitra Jastip Kamu",
        subtitle: "Pilih Mitra Jastip Kamu secara Pribadi",
        backgroundColor: "#FFFFFF"
    },
    {
        id: 3,
        animation: require("../../assets/images/onboarding/onboarding3.json"),
        title: "Pilih Barang",
        subtitle: "Pilih Barang yang kamu ingin titipkan",
        backgroundColor: "#FFFFFF"
    }
]

export default onboarding