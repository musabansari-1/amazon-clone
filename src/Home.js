import React from "react";

import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id = '1'
            title="Microsoft Book 2 1832 13.5-inch Laptop (i5-8350U Quad-core processor/8GB/256GB SSD/Windows 10 Home/Integrated Graphics), Platinum"
            price={2049.40}
            image="https://m.media-amazon.com/images/I/619-tSIK3TL._AC_UY218_.jpg"
            rating={4}
          />
          <Product 
          id = '2'
          title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
          image= "https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY218_.jpg"
          price={2419.50}
          rating = {4}
          />
        </div>
        <div className="home__row">
          <Product
          id = '3' 
          title="Echo Input Portable Smart Speaker Edition - Carry Echo anywhere in your home"
          image="https://m.media-amazon.com/images/I/61qIcidztUL._AC_UY218_.jpg"
          price={36.96}
          rating={3}
          />
          <Product
          id = '4' 
          title="New Apple iPad Pro (11-inch, Wi-Fi + Cellular, 512GB) - Space Grey (2nd Generation)"
          image="data:image/webp;base64,UklGRkYaAABXRUJQVlA4IDoaAACQnQCdASpWAVYBPrFUoUmkIq6kprLaKdgWCeNu4XHhAs78WKOPkfwO/P3T84p9P0+/13eM86n6hPOS/gHXaeiT02mCe+TT5p2K2VptHvPxBUjAtHND+D1+OUPPK1IkAdF6FPZtbRtnlakSAOi9Cns2toxw6bhz2S7/rHad65YLj4FgOD8Fp5OI4DMraBVh3lLZaixR83+m8uwwxq5nlaj4lYIa1Sw/8zj9M7SfUxgfWmlnbckoTx4PlY2MYwKcj1IC2KHoxCjskdq9EDOXvK+wku8fYTnWhpwecuoBYnVm4YcsG3JWLkn3iCzDrcediNSoRvFJeS7qblsNDi+sRQDH/LqMP3Rm8cpMkdYoJqVH9hBt8pR18QbgLzF45R1OiOWkX7aO5wOf6Y31BDkXcvC9BOTwbIA6I2EB6G9OhEJjFoxApUu8joTOFa0b99Zm+WOMJTiA0cRz7n1hWSpvJK/fY+hdGxzGGajvORkms6CmAlg7L5GJikHReafNwndLEq+WWcf/i5ULGDFqWH35d9DOeKXvR6Gb75qedZVvDLMvCwneeeLGdeTJxrFRtsMaqRZBtjRjsmZjRfnTgP+9nCCUvktwwU72QaQSO8UGZVuqHjEoes2k/AThctVamEVARptA8rDmKyU1LyCTzjE9kV2ecGt0cNpw0S9NM7gbINdn43LRtneX8fwuIGtSPzSUMBcWYs0OzbugsQFfdFcRzv0cKqgYhzrrjRlJ7l/1sQh91OpalGMWvvBTCt0LCPzzwiQkBhIsbZ5TlgwnrbFcbm1Nu2sufsPH+FnxDKLQSG+2liXdXI8T8iHBNyubTHep78EP6Pqxs1Aiw3Rx2ibnPid06IXUGkFzv20XPK1IQbhPFVTfRToK82dbxTb/Ed9bOMhgvzNZx7C5Q2y7mf3DiWCNH3MjDZ2XJNB6SUJJI67LElH7Tz/fSziRruEfQ2Ay7a5J945WrNd8ypE1H2qnfSnx28MvIH2JV8pZkwLGMSSV2jAQS+nlERpeDjRtpyCIKfodWrBJx3Yw+j5WSKVRJp0XoUQkA9triPszlK+gXFvSHz7iD11X5kxwBZEg0gFMBmRtzEBEV1XOPheHG0X7stAm+1Mf52pvzoEPepVnPTfQp7MygJrtz5P9/FQA8LbEAUw+B3CsZA2BoDGUhQyezU04OiTSrQ/3wC3Rw8Kfc+5JhJmFXDVixtnk3mn8jh2tlRf4zdnvm7GBFC9wYGOdzWgn1e6ufCe/pGHK1050RNKQLHEs5lS7mzwdaHk1lOKMFksWH7b6Vb97NoeIblZk4TobDKcCPQiNoHwyZ0vcjeFBTjFXDngzsES1uIMvaLMXj3G5yyvvmkVN6mDq+VHDk7wkcuPKdJ+730KezMoCC+VHur+y6Dmhy41smIMSgk//oy0JKwnkFNbNSHRrX6U6Yh3evUyHpo4GAu7jK5kw2cFM7Y1qUhlajz7YrWgrPL8iV/Xniy/OoOXr+WEL3YzGfhIim4t6bkkm14s/xaotSvCq/qXAJJmgO7tdm6jD6xcxdt6r21xPlixtnkxDE9Y2/3gHXrGvLD3qfEheD2Zyp6zcUdzgvKqr+3MT61c3czdIXZTcIAe+s2hp4yCGd1AreyUnZsj1gdkJRPqgfT2eapKYYU9m13h9p97OMa9/k+9nB5WpEgDovQp7NraNs8rUiQB0XoU9mAAA/v7nuAAAAfZlxfMnf4VUhRZMEbuL6tstvACN9qh7cTvxEI9N2HLdw1/nGy68IrTYuRbX2Dy3DXsxuPv9/uPR9fHonsjLbTat2IvqJ1n9QrfaztvRELwoH9LGeJ+SS4OY4BACAfiCmE444dF7BI5OCDBELuMIzgEXl/YG3wJVQLr75/Gw6MOIGQLLbiBrME+SjGUqCwKYVMUByU9a0gVBCPHz78KrigWGiE00nKeS8kWFOKBls5+99aypf7mV8YmVcSHJDuvIrskebdoDoA+xCulufOTeDAV5f8EOKx48eTivrzf5SrV5F0ByQ6Ma2BlOBUdo0t16LMQwRd2tdNHbgQhWFPTHGgwrx2T6eT0TD+rUjtrm788FWILNW2bgu2UO43kWOt/hyZr+nNDX/drMCh1+SjMTFf2jT97WQOVnOlZH/A0eMgzCyX/r36ajEnGRLn4VNVzDFfBRj/mY9u9PqZfrnet6/+yDfjELIR+Oqcb/9GVPMTYlJ1g9R7656MKtExTxTXZFDe32dZZAEN/siyHqUxO0gUUyGxN1MW7ur58IQmRC0rzZt3Pa7MS/nWBsECzq/r23txGP2tgiWzNk1y8g/7FarGSqljenwbodlquQGSflCKZrjuMwkPAT7VAlstAj0HHSIBtvLfxN+fuBqIsDLC9vnCo/OQV8kktxgaV+EdPryXMCkFmWAzH9AwyR22EVFZfEhE5nmJl6flUOtNupqe8rrP3FH2BEZnYrGs2FYijtP1+f9qxoTWdWBv+b68ggcqKtT1QFQp2HI4tjCq2rglMvB5S2NFB/aPbEJD8tVwUHU4cvIWewhlR0Yg4GxA8Qv7hBPIfbN1nrYJbpsCfqea8SOTyQ1JCatMo9Nwv/zfw5ZvBOSXcu891SrHtvv8B/LHqRlCz3ulr4MZVcbpy3IVND0PyHFuU478HZ0Els4klXEUggv+8N/X0xj9vRjQw/kDzw63xZ+yF2fjRcFSVOh5bD+G4CYnPgNtb+rrw63S3Yed2CqtdmEw3NR+YTRyfe124s/HVrWmWjgtwOKSiyRJM/FWYHJ31tgPPtgq46dJFmpWojU5tKdvyov2gtSiZGfd5XOZh7y77XMYzy4XZ3eOSh4YVsyZq4XyNrR72sUPPQGpvmaWHg7eL5d5KskNciOv7Af8byu42MfGpuX5KRK6NqnAKiW0phgudkiCr8b1AvIz/pGVdrH8pApfNzFbs1z0C2oIR732BjJy8vJbU8CaeZFDOCMLcbFYHx1ZrQqtfhYbKL0+rfxG1B+IZbR78/kV/X2lerzp1fwNllAkoz8LiEBUYLtDOGyWHZHg2qUbGDK83X96xU6HxqrpSIg7vGhrEwaYDfFh3PPSmzgnkps3/Kr+S0n+9+Bg5pmxoBsn6C6QGWYfsgZkK2Vm7mwZ4bxmXxZQf/ckVbMA6MmdqyVnfYA0SlMTEDmh6CDy9K3Iu/d1xW1k4540LhVPofw3+9aUvWbcZFS7OfrVlBxBNZeQ8ZXzrBD3HN1XljwEhEXjZoZVSYBUiQsjT2WQZBh3TCyAFxb3vrNxp6tos2mamzfWytwc8p2C7lSFXTi7qkbcuT9yEdZ8l4sH8P7sCBQdQSGbzpJz2yWjyUtHEbtdvxlbr4ZqXVDbIoH2WDRWqIUlfoUy8HOdCN5BYkbtohtN/sEDvDXG8txa0oU7W0whZF60YHBB94Sl6HChmWzEngRrsijkw+m4fN1OQhB9xwd9TdUu31DxXs5mSQ0Wr9tqbMVQhW6/R4gotvLM1RsZI5YMJYGlFy5rqHh2v5n/g7AfqQBzKBcL0P+dEKiswGuQhKL0zUFschc6d6IqR4aSVBMbSKl6TOE7nsA3bMifaf2mRCdncjG6nbhvdTKrBpxgLTwkzBPHkHLv2bf3Finv4JtMkXQsGTQQM6cLxeslN0TbRpTBx7tW7jxpt+1Al12ITFvF3/+kkBpSTFHxJcscN7kCWelqDgAnMoDF0KvRwZe56nSRcMatKlUoeFUEdJg0u1rrXbF7NdQBwug7BrDzg4t19xkg2YM7RXVqnH1AfZS47C0UquP4ymYlSYZcvCtTWEtVqdUFt/EOV0bARc8WDI0evRRku4vrZb3FL5525rPJ32AdmGtUfW0usoVzQDn8Af96U+/cMs/z3a5ekJmTvr0cynuxv+hYxJdcl3fwH8J9VdFcaoCSa282dD6Cwuj+pJRKxYn9RgGr1rbdpl5cqSl7fstv26Xaq1Pa9HRNps+02/oQlPhgAAuN3pgirzss+fr2Aa21LYQ4+6PuYwve7t3xjD56jxUpYngFazUjb7rNfOkTly4V5dw3bj2cVtN4bLYTuCUW/JnEJPp+HP/qM0aXTiBk4MxGYX5K8u+9vDkYOJxN5ssy+jl+dHh+53XtOKv84kXtfnOPgUF8oNObUabINGeKsn+PoEg2NlmWgh25CeO8JLpxg7Lj9WffweJmZYWLwdk8lfkxMySFKRlSX6Am9cHIF6JY3G1LiiR+pJjbZY6QCZGAj8Ynk6AFBK3BMEw5ShQjHbYe0kWiPj+ylhCLPgbwHD57tuZBhS5VdnWp6uKgoFO044O4KosZwdRG+KQHQhPP2dFLehReDEIw9JkVXtkzSt9xENJ6/1OaqAgHhyjLhQavCIULrdvyV7CGArNdLwZlTC71qylsfUrbkHxOSvnvKxEpFbJcTNF+z6GZYL3dBl6Y91Z54DbUvmZqz7o8TggTTBarCmCYIA6H6w+4jtZ8u7aFL0LgBbGGovPk6rA5lwaNdS716mmlISk/882g5C783QmuS8FUbPOAW0gOnyz4IRCNewl0V8aCakzEunbdKtj3JzPCc2gjhO5PUaMciUwUnO6Iw6mIW9Fg9sbnm2RJa7x94RDsmAS1bXLkUG8R4EcCmZC0N0uDOVe5uarxMUPB1KfbrW42xgwqqVduenbWGo/urt4o0GG/fOOOCg9Mz6Vwowdzu+vFwro5dVL+peYE4UNxra1Y2TqZgCXNACqjc8auO1Lmw8F6+JK/PQfyy3CTDFUakiCSEgQTDNW1+3sGYkjnXHlRjIpzYDBb7Xx3dJhzB/MQbW0HA3/gAJlTfCbkpB8LjFMXah4sizjJeEFjpR8nEWRPKEZJ7HND6G/gCXP1OINDSv4kZsNbleSRcHzLJyh+0Cj6CkqR2nlOYyo2mOoWx0ZRTN1OR2FlurDVc7rb8yM/cvbk1CDLprdOFONK3vyyy4RWD+508jE7YNLNdJw5HDk5EtVuU2TdkSAZTMkkfpxbydaMMvHYMAR8/SKJj3QcnIHfz3bTu5zMSjfgr5a14BhZ/i99QrZX6vQG2gzwWzrFGFDMZPlKUj0j9A6TcCFX3iT6JTXgPN3VoHZqBjkYhPCmKKg4dXx5dao6kgmi1QCFbLYZWGBoS5BR4XXU1388nt21Edpu65i0fm8ARAtmdo9KPuKwsLqrKOwpoGyJHPkbALRNFFA63JEBiUXRb0ALSI3sxqbes68PKEQnAypZbarBBdJ15+NL7Ff855bHASgimJrIzBLJrfyuqu991mOtmySzFQ0iInHx/4n/KxCZv7OHTAXerAm+EKeZwzMPgk2yWju15xo6zQ+jZy7Rxf0MryugayF3rxXYCgNPQmokc41qlNc8as9g67m0dt2Vg46VMQb7YKcHpEyz979hDNNB6+DTes24E8Ep4HhYuULROhPJwy8+b261T3meOpe25E85vKwzKdf2Xe92Rdy/BznD2doh3uPK+B4wd1XFd3wwY8LySB/uqN2ud/dlBT/vwyr6bjvHM690FTPIHKCK8PmRYizPBhxSUV3mqsYOVyCM4oMplvFR7Gk8e6dI6oA3+pOrPm0l2/BvxxplPcr38u4ln3/K/A8v8nvD5/8mTceGUuHAVOMaueJL2qbaPJ5TiJAgnBKuVB0zUYBDLX1SsDSrSRTh7LDjYMM7Xexb4YpsMrshRrHX4H3Cdxq+BRb2eHvR6h5cy6TfvGBs1w6XJlHVAM3KjDj29pLrVvaNB92XYDgeE6bO2+kgUeXNwb7HCA4PefnciNmQf8n3sJhB8hciBIC4lRpH+yQIUQEmttDV8bnKEi60qjFN+IopbZrEo18hKja51nhRCTeIx1dgxqN2H+rImgyUiwKK0nyuWXkc+FCy3kB0G2FtzdDho2CJGLDMkIuEWXBpKA2Bbs6xtvTaH2Jr8gtUIcFmfwBGSFMRNMdtFUWdK8JPaWblVLvKtmRs6FAZu/hsPTzNJvrqsi9coEGgw/xwiD2Hemljj1/slfPR7SdOn77nQXYoBJOhaU/xCUAmjmK6AdHyMkiQAhSzCBDvRgLEiAxrmeumrYbgdklUpPsYQvmLhOUYrHDahY1xKay78tty5fneBspqg5kCHwSKlk18tyZGtjA3obGrK3TQ0xYk4BBakn1EUwqCcj45byLQrUQB+YkGoq/cTToVqzjRo5h/ZsDT/AlfdctSQIHDeAIS+kS24X5AMeEUzwgASD5LwI30aeb6kY5Cp1VzPM1AfxHGmHbtgCFCpDESN9/AfXK0est5BMuJ+nx5FOqU0EcRvbp8j8bHqpgIzs+Rc5/+nNiPM6aUC7dZHHwKbZgV7ZCbUBJTJ3opJJ1kF5f8CL5aKXkWDQJRKHY7zGZm8uIOm3C+XPZyxNbumP3r7LSQIEn1FbKbzNq7VDaQSXApYtjqTzXToMZIJH8iSzK1RlUWuK46LZs8TcVX4xHmO6+wpPtUfijjIpwDd4joZ3hviToJ8BkP2zKSwM1aRgfQk+N39+n59ReixB/f3dIYuHwjF5J69kiaIrhTof1o1xxVSY8yXsCXQwzhsehIp8mSUGpRX+vmSnEzcc8RQsB2kq7s+9vsErCBT3D2bON3X0RqMNYkKAHRbWsuw6q9I7osOjMJtlRtYicpv45veTsSEKAciKmD0+jfIs5mmvcFGU7dLmfmz1fKV25V5hnwkTuDWX24R4IyLK2du+YwxtGakyDjw3FA6J4s3eA1I1hqPS9FuOPtKvaLcj71bQKQuPXKBfIA8MlyCZ15ydXsgbcCGN9RZvdccIai8MyfgNuMAMbZZDyQPtY73/FJnNIP60PhCloya9McbAb2Ie2M6qxC7myvqSQkrPt2K4KDx2x4pIXo8Na1vgiZGf1SmueAiWA+dL6UaMJx+/EYn2+FPcENQhjET+HMD2JLRiyoQkD8tGOSnwu8E17YmZQkt/gX1hIqwpho/Ze80nw7pmLBxNAgSyfVJA1a/Rkr1sSvPJYP7AwgFKVu7ulsxevBJfGRBTQ0QYRSRAFa2z62S1p6Lk/CESMSOaZXnUR07KIGUKBhniqcKcjwekMVKwhLw/91v0b9yk2Xd6JwCOc1aqvkD3DjGpq3bp9LFSblNwAYXHhemn2EL/X9X7ix+ol7BcwipJmi9oWIRhzkOIAnMZH1EdoVopMZ/k1GZ1022iXKhryP+PpbPgJqdf6uJ5ovQVXYtWjyT3xjqnHCif+5JQAgDV8BLUkuOgenUtQoYA2eNnm1Y6sRTsIAAnJIce6XJdFy9eCbDLFePi86mrzRDCDmwJcUF39b4wHafrge5Jf5vDvl3G0juVsoHncE5q67SkeYMpfIeAA2JpS21eoyfLit0QdNLZDki9vheWLcUYFS3dPzQcex+DqAiAxQ5EIO96RLYcTmcl/LqHAhk9ew7wzpkjN1km03aatoV42FRdN5KHRiZziXyh5LH+BkBR/O4jyYXCS3MWwdXI8noHBxqeRouye4GcPbIkzjJMjyyJzG5nOXZr2z3gmHp3p360+vTVUDNFdn5V6WuSFJaTiRQqF7HtglkbKC47d4G2+8ZaRtuB6V+Ts2EXapKsCkd8BvdoEzwAscPTUkbHS8pfVQl+hchnQx4zBJdjgDp43EPTsH+hlZi1txwKRBQuXCoUCs8R4z0vhgbdyszYHgtKptd9GLHNMJAaXhHgd8V+JnQdy+neg2TdUj7ghisCk4p7TFVKRXUSY+6lHESXeAgSHD/KGpNhTMyeV86rTCJFHv9eOH7L3eqdcIrwxu510X05b61/kbVrNETt9bQQEaVG1+dhkWQvJ0eaRYaTbNLqhPc/7xdfe5OM7jrISe+4FsJ/Xuf0NvuRYRYKxnd4z9BfZbT0JyM2GI64V8W3CvwTbCh1pfscpOrMwmatkvSviz4P8+MebiKxMzFCWyF3IcelIhIgbeS7aDJQuApsN2BuX4NCn9csDwnO5COk8beBV3GdW0IMfKRNJ30a7Qzu5L3Zlth5uKywYPOLj8pSC78jE/mWFsSEUHq81J7fxKAatOZjHoSNNSEQ0pJ7dpUZ+bt3tdMb/dPbWgoCYmC63G1mUPRQ/mHGv1UnZmlLEUKVwiFwUVxBFfdGhnFFXxb9fidmAjOsLtpWUw4k6rNJnWGyMsDnHSMm4qN+XffsTuFoSWRuafi+IysDtgHQizlqJmQGGVs9m8+roGSkCCfO2PrpQO5b4ubxP2E6WR28g2aSKC45lAcvJFPKNTOeMg9+vAmFLGVB+okzeLUKt7peu5ZZIF9jQ4ZL8hNdeNpj5vxxmqIployf2EKc0SkxUtJtDwl6GgVoNeeaNCxFUEII7vsdGBbRLl9Q8jUnrIeEjMBJZaGUKmRe2kEC9YtlkkCUZCbjDd0kXSfB8XU5JcdZGJGK0jQER+Z0saBYYgMU/Er5zlrffZNPRXekOzywy5bfJyXMrZffpC+b4Sl1FwSLkG1pctexVqiN4CI53OVKWCrJxDAsl+Q9q9HxyYNF3HFvvVhoDpgJ8n6yvhsaIYzVKBFBJMjxU1gglKAQl5oCsSc3QSYmtDwi1X8sU0XacItWEnH65paIwKrabVc9BFrsDTCro5WOWCPvBpXtTk25T4M/Cq3n4aKOHGnuITDdXPwAfzvQEj+wAPrH2oKS3T+dQtQJCDgIKH8Ik4gXTsIn3//J+wuAjpURgxrZUKH+bG5UV6B1SndKCh42gQ4a51Q4ze/hSuQxp2aWQPRZAknBVnWlAVLhJ2vgu1HmzV8Pwz5ZW9YltPX/d6mFVYj7cKGE4NQpfPTM2LYJGQlH4k4VDDbipN38DIYkKnUoIRRttLnjWQ85xPhc+XK+ceUw+USH1G06EBBhuYDTpjCCoNj3YllPlySefVcAwSnORVY4fSOokBDi40eFO5S3Qj8kWZi6JuDEy9YOof23zKtlNZbNLqCzZMB6LLsTw0UWfw3jc3bDOpOcFP9ieQrtLd0niv6XgukUBHM3U1ySyLTzqwTP0LPOkABjNBeD8jOBpPaKAAAAAAAAAAA="
          price={1464.49}
          rating = {4}
          />
          <Product
          id = '5'
          title='Amazfit Bip Lite Smart Watch (Black)' 
          image="https://m.media-amazon.com/images/I/61fslCAtlBL._AC_UL320_.jpg"
          price={199.99}
          rating={2}
          />
        </div>
        <div className="home__row">
          <Product
          id = '6' 
          image="https://m.media-amazon.com/images/I/61DN2-JFu2L._AC_UY218_.jpg"
          title="TCL 138.8 cm (55 inches) 4K Ultra HD Certified Android Smart QLED TV 55C815 (Metallic Black) (2020 Model) | with Built in ...
          TCL 138.8 cm (55 inches) 4K Ultra HD Certified Android Smart QLED TV 55C815 (Metallic Black) (2020 Model) | with Built in Woofer"
          price={927.06}
          rating = {4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
