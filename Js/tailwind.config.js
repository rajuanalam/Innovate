tailwind.config = {
    theme: {
      extend: {
        // custom code start
        // color start
        colors: {
          headercolor: "rgba(22, 12, 110, 0.5)",
          contactbtncolor: "#1BBF00",
          bannerheadcolor: "#FAFAFE",
          bannerpcolor: "#E6E5F3",
          choosebgcolor:" #FDFDFD",
          headtxtcolor: "#EFF4FA",
          overlaycolor:" rgba(106, 98, 197, 0.90)",
          barcolor: "#C4C4C4",
          textcolorone:"#141135",
          textcolortwo:"#726E9E",
          boxshadowcolor:"rgba(162, 169, 192, 0.15)",
          doBgcolor:"#F6F5FF",
          textcolorthree:"#6C7D93",
          layertw:" rgba(21, 0, 248, 0.055)",
          textcolorfour:" #726E9E",
          cardhoverbg:"#6B62C5",
          imagehoverbg:"rgba(106, 98, 197, 0.795)",
          hoverread:"#F4F4F5",
          planBgcolor:"#F9F9FB",
          aboutBgcolor: "#F8F8FF",
          starcolor: "#FF7628",
          backoverlay:"rgba(20, 241, 0, 0.697)",
          footercolor:"#48409C",
          footertextC:"#FEFEFE"
        },

        // color end
        // All Containers Start
        maxWidth: {
            headercontainer: "1170px",
            bannercontainer: "962px",
            aboutuscontainer: "1408px",
            contentcontainer: "1080px",
            blogcontainer:"982px"
        },
        // All Containers End
        // Background Images
        backgroundImage: {
            bannerBg: "url('images/banner_bg.jpg')",
            bannerBgtwo: "url('images/bg_two.jpg')",
            bannerBgthree: "url('images/bg_three.jpg')",
            bannerBgfour: "url('images/impactbg.jpg')",
            blogBg: "url('images/blog_bg.jpg')"
        },

        // Background Images
        // Padding
        padding: {
            bannerPadding: "300px"
        },
        // Padding
        // Font Family
        fontFamily: {
            ralamfonts: ['Josefin Sans',"sans-serif"],
            opensans: ['Open Sans','sans-serif'],
            paprika: ['Paprika','cursive'],
            nunito: ['Nunito','sans-serif'],
            quicksand:['Quicksand','sans-serif']

          },
        // Font Family
        // custom code end
      }
    }
  }