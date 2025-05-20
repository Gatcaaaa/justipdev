export interface onboardingProps {
    id: number,
    image: string,
    title: string,
    subtitle: string,
}

const onboardingData: onboardingProps[] = [
    {
        id: 1,
        image: require("../../assets/images/logo/onboarding1.png"),
        title: "Fitur Chat Langsung",
        subtitle: "Sistem Chat Yang Terintegrasi",
    },
    {
        id: 2,
        image: require("../../assets/images/onboarding/onboarding2.png"),
        title: "Pilih Mitra Jastip Kamu",
        subtitle: "Pilih Mitra Jastip Kamu secara Pribadi"
    },
    {
        id: 3,
        image: require("../../assets/images/onboarding/onboarding3.png"),
        title: "Pilih Barang",
        subtitle: "Pilih Barang yang kamu ingin titipkan"
    }
]