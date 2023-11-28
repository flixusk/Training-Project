import React from "react";
import Header from "../component/header";

const Gallery = () => {
  // Sample array of image URLs (to be replaced with fetched image URLs)
  const imageURLs = [
    "https://e1.pxfuel.com/desktop-wallpaper/954/377/desktop-wallpaper-90-anime-scenery-ideas-in-2022-aesthetic-anime-portrait.jpg",
    "https://e0.pxfuel.com/wallpapers/658/207/desktop-wallpaper-%E3%82%B3%E3%83%BC%E3%83%A9-on-twitter-anime-scenery-anime-scenery-anime-background-aesthetic-anime-scenery.jpg",
    "https://e1.pxfuel.com/desktop-wallpaper/829/897/desktop-wallpaper-anime-landscape-phone-landscape-phone.jpg",
    "https://cdnb.artstation.com/p/assets/images/images/068/573/381/large/wlop-1se.jpg?1698156406",

    "https://e1.pxfuel.com/desktop-wallpaper/156/41/desktop-wallpaper-1080x1920-anime-landscape-houses-scenic-clouds-nature-anime-nature-phone.jpg",
    "https://e1.pxfuel.com/desktop-wallpaper/796/65/desktop-wallpaper-anime-scenery-iphone-anime-scenery-anime-phone-iphone-anime-landscape.jpg",
    "https://e1.pxfuel.com/desktop-wallpaper/53/201/desktop-wallpaper-anime-scenery-sunset-landscape-phone-iphone-phone-anime-scenery.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9ac8a80-4d9d-4b24-b9ca-f46288ed8311/dgclk1q-cf2ede27-7476-41e5-b69f-796e02ddcbe0.png/v1/fit/w_828,h_1104,q_70,strp/madoka_kaname_by_kyojxn_dgclk1q-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwNyIsInBhdGgiOiJcL2ZcL2Q5YWM4YTgwLTRkOWQtNGIyNC1iOWNhLWY0NjI4OGVkODMxMVwvZGdjbGsxcS1jZjJlZGUyNy03NDc2LTQxZTUtYjY5Zi03OTZlMDJkZGNiZTAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.A86s9NfLa28BaJBxZzMZ8OUrkOgyul1plaW6J1yN9Q0",
    "https://e0.pxfuel.com/wallpapers/292/756/desktop-wallpaper-minimal-android-iphone-background-wallpap-iphone-landscape-landscape-scenery.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb0f127a-937e-46a9-a82d-e2a387ae1636/dg3q4ga-f44ea753-28bd-49f5-835e-12011a9ce680.png/v1/fit/w_828,h_1242,q_70,strp/anime_schoolgirl_by_maonedesigns_dg3q4ga-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTM3NiIsInBhdGgiOiJcL2ZcL2JiMGYxMjdhLTkzN2UtNDZhOS1hODJkLWUyYTM4N2FlMTYzNlwvZGczcTRnYS1mNDRlYTc1My0yOGJkLTQ5ZjUtODM1ZS0xMjAxMWE5Y2U2ODAucG5nIiwid2lkdGgiOiI8PTM1ODQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.p0OAE1CGnXH9ki_Y0s_icY_VtypysszzQC9y3Dm6uac",
    "https://e0.pxfuel.com/wallpapers/543/219/desktop-wallpaper-sany-on-landscape-scenery-nature-chill-phone.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb0f127a-937e-46a9-a82d-e2a387ae1636/dg3q43q-ff86dca3-eda4-4078-bbb7-c5279ef48b5d.png/v1/fit/w_828,h_1242,q_70,strp/anime_schoolgirl_by_maonedesigns_dg3q43q-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTM3NiIsInBhdGgiOiJcL2ZcL2JiMGYxMjdhLTkzN2UtNDZhOS1hODJkLWUyYTM4N2FlMTYzNlwvZGczcTQzcS1mZjg2ZGNhMy1lZGE0LTQwNzgtYmJiNy1jNTI3OWVmNDhiNWQucG5nIiwid2lkdGgiOiI8PTM1ODQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.U6CP04UZezmSsWt71dy-PeD4f89aSZkIHGOl9wP7rBw",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/31bcef89-71d3-4143-b4e4-491813eccd24/dfwsxob-c6b5b6a9-c564-43e8-bd64-e31977d925c0.png/v1/fit/w_768,h_1024,q_70,strp/anime_cute_girl_by_hasibuya_dfwsxob-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzMxYmNlZjg5LTcxZDMtNDE0My1iNGU0LTQ5MTgxM2VjY2QyNFwvZGZ3c3hvYi1jNmI1YjZhOS1jNTY0LTQzZTgtYmQ2NC1lMzE5NzdkOTI1YzAucG5nIiwid2lkdGgiOiI8PTc2OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._THKk8mA2k1lypMr2r3j3zdeLOEOPr-Gtq797aCSZNo",
    "https://cdnb.artstation.com/p/assets/images/images/054/497/061/large/wlop-1se.jpg?1664691512",
    "https://cdna.artstation.com/p/assets/images/images/052/395/622/large/wlop-51se.jpg?1659672637",

    "https://cdnb.artstation.com/p/assets/images/images/069/784/615/large/alexandra-fomina-1.jpg?1701014485",
    "https://cdnb.artstation.com/p/assets/images/images/069/692/665/large/alexandra-fomina-1.jpg?1700750613",
    "https://cdna.artstation.com/p/assets/images/images/069/490/462/large/ibrahem-swaid-sob2-color-2.jpg?1700254079",
    "https://cdnb.artstation.com/p/assets/images/images/069/217/225/large/-ki3-7m.jpg?1699599800",
    "https://cdnb.artstation.com/p/assets/images/images/040/068/277/large/xia-ban-qq-20210731170108.jpg?1627765310",
    "https://cdna.artstation.com/p/assets/images/images/036/424/056/large/avetetsuya-studios-143140530-717071339197663-9047571146622544071-n.jpg?1617647221",
    "https://cdnb.artstation.com/p/assets/images/images/062/864/305/large/stas-grivnak-end.jpg?1684159858",
    "https://cdna.artstation.com/p/assets/images/images/003/683/132/large/julia-kovalyova-9fc54bdf5d0aa9e9305c01a0a9ebf269.jpg?1476384425",
    "https://i.pinimg.com/564x/81/07/be/8107bec5bd356d3178963888d2146be0.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9ac8a80-4d9d-4b24-b9ca-f46288ed8311/dgc8c36-39a2c56e-515c-4262-b01f-6e8d59c3bddc.png/v1/fill/w_1032,h_774,q_70,strp/sleepy_miku_by_kyojxn_dgc8c36-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvZDlhYzhhODAtNGQ5ZC00YjI0LWI5Y2EtZjQ2Mjg4ZWQ4MzExXC9kZ2M4YzM2LTM5YTJjNTZlLTUxNWMtNDI2Mi1iMDFmLTZlOGQ1OWMzYmRkYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JyOEw9B19cBbDt3g7CrMJwLlWXXuEL4APlLFLfbr07Q",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80c664a0-b644-49c0-8006-1da6b8bc2367/dfydz9z-59b17c05-b0a7-4bf0-b9d6-1457bf7d14b4.png/v1/fill/w_894,h_894,q_70,strp/oc_by_novaruby_dfydz9z-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwYzY2NGEwLWI2NDQtNDljMC04MDA2LTFkYTZiOGJjMjM2N1wvZGZ5ZHo5ei01OWIxN2MwNS1iMGE3LTRiZjAtYjlkNi0xNDU3YmY3ZDE0YjQucG5nIiwiaGVpZ2h0IjoiPD05MDAiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzgwYzY2NGEwLWI2NDQtNDljMC04MDA2LTFkYTZiOGJjMjM2N1wvbm92YXJ1YnktNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.fgFK4D_Ls_ze89Muu7jIQISyq_PuKa7bw9Ly7-97ItY",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80c664a0-b644-49c0-8006-1da6b8bc2367/dgegney-d9d4a2d6-8ff9-4846-8a24-541c153998da.png/v1/fit/w_828,h_1472,q_70,strp/oc___prisma_by_novaruby_dgegney-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwYzY2NGEwLWI2NDQtNDljMC04MDA2LTFkYTZiOGJjMjM2N1wvZGdlZ25leS1kOWQ0YTJkNi04ZmY5LTQ4NDYtOGEyNC01NDFjMTUzOTk4ZGEucG5nIiwiaGVpZ2h0IjoiPD0xNjAwIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC84MGM2NjRhMC1iNjQ0LTQ5YzAtODAwNi0xZGE2YjhiYzIzNjdcL25vdmFydWJ5LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19._kGI7rUVojMYVTS9UWAX5TwvHngFteuCIfYQALAOM-M",
    "https://e1.pxfuel.com/desktop-wallpaper/394/913/desktop-wallpaper-4-anime-landscape-for-iphone-and-android-by-matthew-gonzales-phone-anime-scenery.jpg",
    "https://w0.peakpx.com/wallpaper/438/267/HD-wallpaper-anime-portrait-display-landscape.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/488436b2-46df-43a8-90e5-8e74d2ecbc96/dg8bsj9-eed24c70-51ea-4802-adf5-d4efdb4167c2.jpg/v1/fit/w_828,h_1100,q_70,strp/beautiful_anime_girl_artwork_by_dendyh7_dg8bsj9-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2MCIsInBhdGgiOiJcL2ZcLzQ4ODQzNmIyLTQ2ZGYtNDNhOC05MGU1LThlNzRkMmVjYmM5NlwvZGc4YnNqOS1lZWQyNGM3MC01MWVhLTQ4MDItYWRmNS1kNGVmZGI0MTY3YzIuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.KrZzfDJwCpAjusrdp-0F5gv-4JhEiH_6MUybStK7e1k",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f131d22-7974-4793-9db3-2160376b5c72/dg04qyy-751c2763-ddd3-40b0-ac6d-a4b68e537f50.jpg/v1/fit/w_828,h_1518,q_70,strp/the_human_world1_by_wlop_dg04qyy-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjA5MiIsInBhdGgiOiJcL2ZcLzZmMTMxZDIyLTc5NzQtNDc5My05ZGIzLTIxNjAzNzZiNWM3MlwvZGcwNHF5eS03NTFjMjc2My1kZGQzLTQwYjAtYWM2ZC1hNGI2OGU1MzdmNTAuanBnIiwid2lkdGgiOiI8PTExNDEifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.AtTP1r-jDDK7QxyD0mYtOmUXnIvRekjagk69hNmGPbw",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea00c2d0-a66c-4df7-a968-d60c67552bb5/d4xy3uq-95c08303-3f64-42be-ba08-a18a5d8f01b9.jpg/v1/fit/w_750,h_1125,q_70,strp/le_pianoquarium_by_aquasixio_d4xy3uq-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEyNSIsInBhdGgiOiJcL2ZcL2VhMDBjMmQwLWE2NmMtNGRmNy1hOTY4LWQ2MGM2NzU1MmJiNVwvZDR4eTN1cS05NWMwODMwMy0zZjY0LTQyYmUtYmEwOC1hMThhNWQ4ZjAxYjkuanBnIiwid2lkdGgiOiI8PTc1MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sS6l-hDe36zfAwfTewFOADlnysXcBKP7fBNM469Mnzc",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea00c2d0-a66c-4df7-a968-d60c67552bb5/d53kwwp-2ccd664c-0ff0-4017-bf32-5cd2c3b6992b.jpg/v1/fit/w_800,h_1200,q_70,strp/rage_by_aquasixio_d53kwwp-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcL2VhMDBjMmQwLWE2NmMtNGRmNy1hOTY4LWQ2MGM2NzU1MmJiNVwvZDUza3d3cC0yY2NkNjY0Yy0wZmYwLTQwMTctYmYzMi01Y2QyYzNiNjk5MmIuanBnIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.QeIYi3AbP2Yq30a8R5K_gdrGiYbNzJy5MCih4ZqkmeE",
    "https://e0.pxfuel.com/wallpapers/351/973/desktop-wallpaper-kedmanee-phantaeng-on-ancient-scenery-anime-scenery-anime-background-anime-spring-scenery.jpg",
    "https://e0.pxfuel.com/wallpapers/868/132/desktop-wallpaper-the-city-of-dream-iphone-android-background-followme-fantasy-landscape-anime-scenery-anime-scenery.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f131d22-7974-4793-9db3-2160376b5c72/dfuays8-f09a2946-0168-4e8f-9644-6e8175860b71.jpg/v1/fit/w_828,h_1610,q_70,strp/tiannan_by_wlop_dfuays8-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTk5MiIsInBhdGgiOiJcL2ZcLzZmMTMxZDIyLTc5NzQtNDc5My05ZGIzLTIxNjAzNzZiNWM3MlwvZGZ1YXlzOC1mMDlhMjk0Ni0wMTY4LTRlOGYtOTY0NC02ZTgxNzU4NjBiNzEuanBnIiwid2lkdGgiOiI8PTEwMjUifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4bxmVjofHDm70PXsss3WxKpvK1Ky2ywFVU8pEFXEyOs",
    "https://cdna.artstation.com/p/assets/images/images/051/701/420/large/wlop-35se.jpg?1657954032",

    "https://e0.pxfuel.com/wallpapers/110/588/desktop-wallpaper-cyberpunk-amoled-dark-vertical-k-landscape-aesthetic-japan-anime-scenery-neon-vertical.jpg",
    "https://e0.pxfuel.com/wallpapers/502/952/desktop-wallpaper-anime-landscape-phone-anime-landscape-gallery-anime-scenery.jpg",
    "https://cdnb.artstation.com/p/assets/images/images/051/247/745/large/wlop-33se.jpg?1656829473",

    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a9c9fab-87f0-4659-a31b-e1e930c397c7/dficawl-66ed7690-e70a-4bc3-be41-3a62dba96afa.jpg/v1/fit/w_828,h_1210,q_70,strp/h_a_l_o_by_nixeu_dficawl-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQwMCIsInBhdGgiOiJcL2ZcLzBhOWM5ZmFiLTg3ZjAtNDY1OS1hMzFiLWUxZTkzMGMzOTdjN1wvZGZpY2F3bC02NmVkNzY5MC1lNzBhLTRiYzMtYmU0MS0zYTYyZGJhOTZhZmEuanBnIiwid2lkdGgiOiI8PTk1OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.NXcZHrJomuWq_BxubOAMsJ1mhhv7_KCdle6SWDqLOkc",
    "https://cdna.artstation.com/p/assets/images/images/047/046/902/large/wlop-44se.jpg?1646643458",
    "https://cdna.artstation.com/p/assets/images/images/037/291/422/large/wlop-33se.jpg?1620016916",
    "https://cdnb.artstation.com/p/assets/images/images/036/821/637/large/wlop-20se.jpg?1618722699",

    // Add more image URLs here...
  ];

  return (
    <div>
      <Header />
      <div className="gallery-container">
        <div className="gallery">
          {imageURLs.map((imageUrl, index) => (
            <div key={index} className="image-container">
              <img src={imageUrl} alt="" className="image2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
