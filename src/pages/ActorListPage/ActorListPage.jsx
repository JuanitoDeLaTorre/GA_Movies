import React from 'react'
import NavBar from '../NavBar/NavBar'
import ActorBlock from './ActorBlock'
import {useState, useEffect} from 'react'



export default function ActorListPage({user, movies}) {

  const picsOrItDidntHappen = ['https://fastly.picsum.photos/id/831/200/200.jpg?hmac=AANxS9u4DeDj11ZED76-Rss_Un2ervq4KBoDKOOu4aI', 'https://fastly.picsum.photos/id/893/200/200.jpg?hmac=MKUqbcyRrvAYoTmgHo74fEI3o9V4CH2kBrvWfmHkr7U', 'https://fastly.picsum.photos/id/915/200/200.jpg?hmac=zZ-_EQ1TWG_LFblhB2BrD2CJYUhLEnobSCCthppN0ZE', 'https://fastly.picsum.photos/id/594/200/200.jpg?hmac=owYWnk-K1Yd10c-pUQt8S_02BsTYKsMvSxMWNexClq8', 'https://fastly.picsum.photos/id/842/200/200.jpg?hmac=RW9iEgAYLKwoinQWSz_zrZHyOwmVEgqvoZTPebkRGMM', 'https://fastly.picsum.photos/id/811/200/200.jpg?hmac=aHZzO_yldxODDwFs6yO7fk8Mr1uZ7Mx2J-Ek188-rT4', 'https://fastly.picsum.photos/id/887/200/200.jpg?hmac=yOynpt597y5pLfJ5SsRVVKZiT5MXElbhtgUYeRzu3S4', 'https://fastly.picsum.photos/id/564/200/200.jpg?hmac=uExb18W9rplmCwAJ9SS5NVsLaurpaCTCBuHZdhsW25I', 'https://fastly.picsum.photos/id/241/200/200.jpg?hmac=F-mDYyK1xUiXjlLd5PvE8EQpTwGfFndV7mMaANDtl28', 'https://fastly.picsum.photos/id/395/200/200.jpg?hmac=wwuALTmMrTRCklDqZ8tkCheruznT4KWlx3IlRc0ISts', 'https://fastly.picsum.photos/id/905/200/200.jpg?hmac=PxOdpEd_gpj1SeeC1DMysEuacd5-lp9jjs1wfD4ds74', 'https://fastly.picsum.photos/id/894/200/200.jpg?hmac=h3PvihhxRrUznPuW-OPbq7zxa0On5jLsyYbWwI6nW6w', 'https://fastly.picsum.photos/id/1044/200/200.jpg?hmac=HB3e6tTss6J_9wexZ1v1psMlccdyQIrHrrijUgWXFhg', 'https://fastly.picsum.photos/id/423/200/200.jpg?hmac=fXwRSSVHFlYgq9MfObWaWCb_p9L6ysOWda9lLOtAWc0', 'https://fastly.picsum.photos/id/610/200/200.jpg?hmac=6qOvp5zik0MBH2bc7jzgth7yzkY8IlZXay0WCNF20DM', 'https://fastly.picsum.photos/id/222/200/200.jpg?hmac=GngU-e1fHxK6MMBinwEkzsh8sMkjssl_vp8G6vJrb8U', 'https://fastly.picsum.photos/id/659/200/200.jpg?hmac=kFpdD3XTBGwPUAH1tD-AiWigstjIX8WGIcyySuVQIvE', 'https://fastly.picsum.photos/id/383/200/200.jpg?hmac=rXabQJHkUdhkZ467kU2O2mFC-ZufkuYob-xSiZEbNWc', 'https://fastly.picsum.photos/id/490/200/200.jpg?hmac=7WZhaN9NS8sb08YmpHre_3NGnVUsmH8X5W_GlG2Mry4', 'https://fastly.picsum.photos/id/892/200/200.jpg?hmac=lMI1NzfAzgWlBV0lCCLYXsxRxsq5Mwr-RK9K6AId4X4', 'https://fastly.picsum.photos/id/605/200/200.jpg?hmac=aAxC3x4fmu7RXhLH-1idijrAUvlZVEwlUqjzKR80YWo', 'https://fastly.picsum.photos/id/928/200/200.jpg?hmac=5MQxbf-ANcu87ZaOn5sOEObpZ9PpJfrOImdC7yOkBlg', 'https://fastly.picsum.photos/id/1001/200/200.jpg?hmac=J4yq_Q2Zy5CCcNlGMUf26bes2ksQBi_MzvdgW7rAcio', 'https://fastly.picsum.photos/id/625/200/200.jpg?hmac=oIwf4IzbglfXYZo-9VXZTHju2-ox3D-Vooeuioav_nw', 'https://fastly.picsum.photos/id/54/200/200.jpg?hmac=-2_HX5umbAEVPP9CokmPW3Kc8V9iDplneKlS73LWdQQ', 'https://fastly.picsum.photos/id/24/200/200.jpg?hmac=Tw5b43UPAehS5e4JyB0qMQysvfLBmu_GZ_iafWou3m8', 'https://fastly.picsum.photos/id/234/200/200.jpg?hmac=xPu1ioX9SWsHBaICVti0qPl5c7fPKvztdkSxpv8w6oo', 'https://fastly.picsum.photos/id/146/200/200.jpg?hmac=BEfC1fMGgqn0zNUowEDrlnKsAisQSg9rYB7RxuXpTb4', 'https://fastly.picsum.photos/id/681/200/200.jpg?hmac=GBX3TnpfRpzN-ZDEpA01hkf2-G7DkpMs53xqLpv8pa4', 'https://fastly.picsum.photos/id/798/200/200.jpg?hmac=Y-GVgT90HQZA0AOyRx9gcdj-14IrW6-zz81X6pMlE0k', 'https://fastly.picsum.photos/id/222/200/200.jpg?hmac=GngU-e1fHxK6MMBinwEkzsh8sMkjssl_vp8G6vJrb8U', 'https://fastly.picsum.photos/id/0/200/200.jpg?hmac=RZmZI0kb9l_aRWHFyOZUGyc8xsyV30HOJX8a4wuHWkA', 'https://fastly.picsum.photos/id/724/200/200.jpg?hmac=sUKRpiwXopeRQ36cEVnZgrG3Wd73G8iet9dfVSvmi8k', 'https://fastly.picsum.photos/id/1009/200/200.jpg?hmac=2D10SFaYliFjzL4jp_ZjLmZ1_2jaJw89CntiJGjdlGE', 'https://fastly.picsum.photos/id/417/200/200.jpg?hmac=urRppSmoZMSijmMMM_igfBcmbcTu_y285erBFfY7jE4', 'https://fastly.picsum.photos/id/988/200/200.jpg?hmac=-lwK-i6PssD9WlUeVPDIhOxDVxlzJKeM4MgEx_fIqJg', 'https://fastly.picsum.photos/id/815/200/200.jpg?hmac=7zFtysk327pj5h65VOYejVs4MTbaHLX4cvGw1UL2A88', 'https://fastly.picsum.photos/id/928/200/200.jpg?hmac=5MQxbf-ANcu87ZaOn5sOEObpZ9PpJfrOImdC7yOkBlg', 'https://fastly.picsum.photos/id/231/200/200.jpg?hmac=lUSm6Na5VxIhLKub6Y3JaBOAwCjkimAi-zHEOInwL58', 'https://fastly.picsum.photos/id/847/200/200.jpg?hmac=ET2eUKsG4SCaCnGMrTpgEBXpx7YG1j2X8DpBnHC25wA', 'https://fastly.picsum.photos/id/807/200/200.jpg?hmac=Y8gayvNItiQYxP_Pd-2un9GH09XuyJdIZOQPw6K9QsI', 'https://fastly.picsum.photos/id/510/200/200.jpg?hmac=1FeO80NQwx3Om4VsFCOgUaY6aIbQqaEDLKymcdZD1AQ', 'https://fastly.picsum.photos/id/95/200/200.jpg?hmac=EFN5lZlH5NAZUP3gI_uiihIaHacpG1u4aw_KmeJgeQ0', 'https://fastly.picsum.photos/id/795/200/200.jpg?hmac=frCAqjE9buwwg1NjgwTe6Ef_WWIJOl5h2c6-TFjnlA4', 'https://fastly.picsum.photos/id/26/200/200.jpg?hmac=A1fbIskzMWVQs1JuyIsJXYGuCgqVwevLXT4YaIJM3Rk', 'https://fastly.picsum.photos/id/404/200/200.jpg?hmac=7TesL9jR4uM2T_rW-vLbBjqvfeR37MJKTYA4TV-giwo', 'https://fastly.picsum.photos/id/883/200/200.jpg?hmac=evNCTcW3jHI_xOnAn7LKuFH_YkA8r6WdQovmsyoM1IY', 'https://fastly.picsum.photos/id/1003/200/200.jpg?hmac=w2SN03yog7_RB-IfnyWX1FtBjSHebnoWD35Lj4-iV7o', 'https://fastly.picsum.photos/id/628/200/200.jpg?hmac=iI5Sx7kEQEboYw_QKjCo-GsB_EyIcdl7LYnW-EbgEqg', 'https://fastly.picsum.photos/id/987/200/200.jpg?hmac=9X6IIE8qZgx6bJb7rf3dZELTmfyt3rZAHw65r8_ko_4', 'https://fastly.picsum.photos/id/530/200/200.jpg?hmac=8xYienQWgWt77lTmWc16OeXu2xr3XNZRoHqDRdtuW5I', 'https://fastly.picsum.photos/id/372/200/200.jpg?hmac=QFGGlcWGNWBK0oDD1jghIaCvGIFU5iJJcd2VhF5oH6o', 'https://fastly.picsum.photos/id/618/200/200.jpg?hmac=749yPgO2NHLB8qH92MCDtCjdkglAPh6-J4CygmoI2JY', 'https://fastly.picsum.photos/id/18/200/200.jpg?hmac=naWL3P7tSw9NeN2OXqD0XhBgnBko_h5B-Z3UdUVLFcU', 'https://fastly.picsum.photos/id/201/200/200.jpg?hmac=bDRwJ_w2on8pQ9tbqlqMghsddYlj20LS9E3l3NswK7Q', 'https://fastly.picsum.photos/id/1013/200/200.jpg?hmac=mW7QsQSZWgWOm8DAQ2zj3vcwbLk6w_AkeUOvEx7zI24', 'https://fastly.picsum.photos/id/919/200/200.jpg?hmac=jtDR0R0QNk8D4_SfAICLM_dNLuspq3B3nTWyOSYcQis', 'https://fastly.picsum.photos/id/851/200/200.jpg?hmac=JVRP-bj1-hofsGmrxkRZ4VaDr699PvCv6i8zcc6n-GQ', 'https://fastly.picsum.photos/id/887/200/200.jpg?hmac=yOynpt597y5pLfJ5SsRVVKZiT5MXElbhtgUYeRzu3S4', 'https://fastly.picsum.photos/id/944/200/200.jpg?hmac=1Hdj8yjDsg6pbmgsiAGRdUQ8MA4hfi4uapepYyrMaGU', 'https://fastly.picsum.photos/id/112/200/200.jpg?hmac=a8Ve-HhSWAKC-SNBLKVosZ5gHmqMhgtNkPMYVMjEAbI', 'https://fastly.picsum.photos/id/365/200/200.jpg?hmac=1d3GDxGN6ctXX3y8q4PA_hKu6fLOCEGbgeKZKJ8K8U8', 'https://fastly.picsum.photos/id/358/200/200.jpg?hmac=Jz0Wznjq-WZNc6RCtBlacITT7zzNvwlMxNnRhP2i6jM', 'https://fastly.picsum.photos/id/896/200/200.jpg?hmac=GtnSTSOmlmBRvu2fpraj0-9azTBV0t32V07JLyAVPhM', 'https://fastly.picsum.photos/id/365/200/200.jpg?hmac=1d3GDxGN6ctXX3y8q4PA_hKu6fLOCEGbgeKZKJ8K8U8', 'https://fastly.picsum.photos/id/1026/200/200.jpg?hmac=CWxlEHUZLgcfP2qGDrSBD-5MXHOjsY-ic-LwDigTunc', 'https://fastly.picsum.photos/id/240/200/200.jpg?hmac=PZiJibMUuv5Zpv9MAcqLaCYJOPt-XNuDh3RPBZiGcoY', 'https://fastly.picsum.photos/id/797/200/200.jpg?hmac=-S9mzdkNyeh-FXTUE04cyqzvAV1W2D80OVQtTQHNt-k', 'https://fastly.picsum.photos/id/357/200/200.jpg?hmac=hHhE00vBpBPSjAiUhwzFKQi9PsCWu7sblLKC2rT6Fn8', 'https://fastly.picsum.photos/id/648/200/200.jpg?hmac=Kb_qhDdDfOGevrbabLvz4Tp3fu-M7DxQE6APqQRnwVw', 'https://fastly.picsum.photos/id/137/200/200.jpg?hmac=qhNK8PzcRQJaCJlGEj1q5ceRIkKkfPmVuOwE5ZInXA8', 'https://fastly.picsum.photos/id/534/200/200.jpg?hmac=fFEUULhOfD3o0WvBKAcTIKeSps59JC49BsTEBu5Z3eI']

  const allActors = []
  const [images, setImages] = useState([])

  for (let i = 0; i < movies.length; i++) {
    for(let j = 0; j < movies[i].cast.length; j++){
      allActors.push(movies[i].cast[j])
    }
  }

  let uniqueActors = [...new Set(allActors)]
  console.log(uniqueActors)
  let pair = []

  useEffect(() => {
    setImages(picsOrItDidntHappen)
  },[])

  for(let i = 0; i < uniqueActors.length; i++){
    let name = uniqueActors[i]
    pair.push({name: name, url: picsOrItDidntHappen[i]})
  }

  console.log(pair)


  return (
    <>
    <NavBar user={user}/>
    <div className="actorContainer">
    {pair.map(actor => <ActorBlock key = {actor.name} url = {actor.url} actor = {actor.name}/>)}
    </div>
    {/* <img src={fetch('https://picsum.photos/200').then(res => res.url)} alt="" /> */}
        </>
  )
}
