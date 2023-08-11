import mongoose from "mongoose";

const planSchema = new mongoose.Schema({
    name: String,
    price: Number,
    benefits: [],
});

export const Plan = mongoose.model('Plan', planSchema);

// try {
//     const mobile = new Plan({
//         name: "Mobile",
//         price: 100,
//         benefits: ["Good", "480p", "Phone", "Tablet"]
//     })

//     const basic = new Plan({
//         name: "basic",
//         price: 200,
//         benefits: ["Good", "720p", "Phone", "Tablet", "Computer", "TV"]
//     })

//     const standard = new Plan({
//         name: "standard",
//         price: 500,
//         benefits: ["Better", "1080p", "Phone", "Tablet", "Computer", "TV"]
//     })

//     const premium = new Plan({
//         name: "premium",
//         price: 700,
//         benefits: ["Best", "4K + HDR", "Phone", "Tablet", "Computer", "TV"]
//     })

//     await mobile.save()
//     await basic.save()
//     await standard.save()
//     await premium.save()
// } catch (error) {
//     console.error(error)
// }
