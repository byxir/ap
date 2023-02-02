import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const addict = await prisma.user.create({
    data: {
      name: "byxirclone",
      email: null,
      image:
        "https://dk2dv4ezy246u.cloudfront.net/widgets/sSEDTwRiphS1_large.jpg",
      socials: {
        create: [
          {
            link: "https://twitch.tv/byxirski",
          },
          {
            link: "https://twitter.com/byxirski",
          },
          {
            link: "https://youtube.com/byxirski",
          },
        ],
      },
      badges: {
        create: [
          {
            text: "GRINDER",
            image: "../../../predator.png",
            difficulty: 5,
          },
        ],
      },
      performances: {
        create: [],
      },
    },
  });

  const adasdfdict = await prisma.user.create({
    data: {
      name: "byxirclone",
      email: null,
      image:
        "https://dk2dv4ezy246u.cloudfront.net/widgets/sSEDTwRiphS1_large.jpg",
      socials: {
        create: [
          {
            link: "https://twitch.tv/byxirski",
          },
          {
            link: "https://twitter.com/byxirski",
          },
          {
            link: "https://youtube.com/byxirski",
          },
        ],
      },
      badges: {
        create: [
          {
            text: "GRINDER",
            image: "../../../predator.png",
            difficulty: 5,
          },
        ],
      },
      performances: {
        create: [],
      },
    },
  });

  const addasdfasdfict = await prisma.user.create({
    data: {
      name: "byxirclone",
      email: null,
      image:
        "https://dk2dv4ezy246u.cloudfront.net/widgets/sSEDTwRiphS1_large.jpg",
      socials: {
        create: [
          {
            link: "https://twitch.tv/byxirski",
          },
          {
            link: "https://twitter.com/byxirski",
          },
          {
            link: "https://youtube.com/byxirski",
          },
        ],
      },
      badges: {
        create: [
          {
            text: "GRINDER",
            image: "../../../predator.png",
            difficulty: 5,
          },
        ],
      },
      performances: {
        create: [],
      },
    },
  });
  const afdsafsdfddict = await prisma.user.create({
    data: {
      name: "byxirclone",
      email: null,
      image:
        "https://dk2dv4ezy246u.cloudfront.net/widgets/sSEDTwRiphS1_large.jpg",
      socials: {
        create: [
          {
            link: "https://twitch.tv/byxirski",
          },
          {
            link: "https://twitter.com/byxirski",
          },
          {
            link: "https://youtube.com/byxirski",
          },
        ],
      },
      badges: {
        create: [
          {
            text: "GRINDER",
            image: "../../../predator.png",
            difficulty: 5,
          },
        ],
      },
      performances: {
        create: [],
      },
    },
  });
  const addiasdfasdfct = await prisma.user.create({
    data: {
      name: "byxirclone",
      email: null,
      image:
        "https://dk2dv4ezy246u.cloudfront.net/widgets/sSEDTwRiphS1_large.jpg",
      socials: {
        create: [
          {
            link: "https://twitch.tv/byxirski",
          },
          {
            link: "https://twitter.com/byxirski",
          },
          {
            link: "https://youtube.com/byxirski",
          },
        ],
      },
      badges: {
        create: [
          {
            text: "GRINDER",
            image: "../../../predator.png",
            difficulty: 5,
          },
        ],
      },
      performances: {
        create: [],
      },
    },
  });
  const adasdfasdfdict = await prisma.user.create({
    data: {
      name: "byxirclone",
      email: null,
      image:
        "https://dk2dv4ezy246u.cloudfront.net/widgets/sSEDTwRiphS1_large.jpg",
      socials: {
        create: [
          {
            link: "https://twitch.tv/byxirski",
          },
          {
            link: "https://twitter.com/byxirski",
          },
          {
            link: "https://youtube.com/byxirski",
          },
        ],
      },
      badges: {
        create: [
          {
            text: "GRINDER",
            image: "../../../predator.png",
            difficulty: 5,
          },
        ],
      },
      performances: {
        create: [],
      },
    },
  });
  const addicasdfasft = await prisma.user.create({
    data: {
      name: "byxirclone",
      email: null,
      image:
        "https://dk2dv4ezy246u.cloudfront.net/widgets/sSEDTwRiphS1_large.jpg",
      socials: {
        create: [
          {
            link: "https://twitch.tv/byxirski",
          },
          {
            link: "https://twitter.com/byxirski",
          },
          {
            link: "https://youtube.com/byxirski",
          },
        ],
      },
      badges: {
        create: [
          {
            text: "GRINDER",
            image: "../../../predator.png",
            difficulty: 5,
          },
        ],
      },
      performances: {
        create: [],
      },
    },
  });
  const addictaeff = await prisma.user.create({
    data: {
      name: "byxirclone",
      email: null,
      image:
        "https://dk2dv4ezy246u.cloudfront.net/widgets/sSEDTwRiphS1_large.jpg",
      socials: {
        create: [
          {
            link: "https://twitch.tv/byxirski",
          },
          {
            link: "https://twitter.com/byxirski",
          },
          {
            link: "https://youtube.com/byxirski",
          },
        ],
      },
      badges: {
        create: [
          {
            text: "GRINDER",
            image: "../../../predator.png",
            difficulty: 5,
          },
        ],
      },
      performances: {
        create: [],
      },
    },
  });

  // console.log(addict);

  // const kamchatskiye = await prisma.club.create({
  //   data: {
  //     name: "камчатские айсберги",
  //     image:
  //       "https://static.mk.ru/upload/entities/2018/07/16/articles/detailPicture/5a/29/21/07/14077b7d3eea82cd775fb8faeff009f5.jpg",
  //     inviteOnly: true,
  //     members: {
  //       connect: [
  //         { id: "cldd628kg0000p782j88nfgjj" },
  //         { id: "cldesvoxg0000p782av1bnu0c" },
  //         { id: "cldesvqjc000ip7821if72sh8" },
  //       ],
  //     },
  //   },
  // });

  // const brazzers = await prisma.club.create({
  //   data: {
  //     name: "brazzers",
  //     image:
  //       "https://1000logos.net/wp-content/uploads/2017/07/Brazers-logos.jpg",
  //     inviteOnly: false,
  //     members: {
  //       connect: [
  //         { id: "cldkn5yaw0000p7fyog5minc0" },
  //         { id: "cldknf7yg0000p7id0kwwe0yy" },
  //       ],
  //     },
  //   },
  // });

  // console.log(brazzers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
