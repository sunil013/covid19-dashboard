import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430567/ANI_zd6rha.png',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430848/AP_xyochc.png',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430567/arunachal_pradesh_e8xdtb.png',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430564/assam_hgnvsn.png',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430566/bi_p2ppaz.png',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663431856/chandigrah_sz0ri5.png',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430566/chhattisgraph_rkjf85.png',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663431854/daman_wz15aa.png',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430566/delhi_hzqytm.png',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430569/goa_eyb2ys.png',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430567/gj_cwuve8.png',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430570/hy_t95e1m.png',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430572/hp_ozbkqu.png',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430571/jandk_trki9m.png',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430571/jk_r1kn3x.png',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430575/karnataka_hobwwo.png',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430576/kerala_jtu0pe.png',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430572/ladakh_f3mtz3.png',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430574/lakshadweep_uyv7cs.png',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430575/maharashtra_knyyfm.png',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430579/mp_v9iauw.png',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430578/manipur_ut6ebs.png',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430577/meghalava_ixzkz9.png',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430585/mizeram_khotaq.png',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430580/nagaland_puxdpc.png',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430579/orissa_pzsw9h.png',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430581/puducherry_nrd1xp.png',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430581/pb_whcbde.png',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430583/raj_podqtb.png',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430584/sikkim_zwhm08.png',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430588/TN_wbseha.png',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430583/telangana_sk5ekg.png',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430585/tripura_cqeglf.png',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430588/up_s8guzf.png',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430587/uk_rui5ps.png',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
    state_image:
      'https://res.cloudinary.com/sunil013/image/upload/v1663430588/wb_glt5dp.png',
  },
]

const StateImage = props => {
  const {stateDetails} = props
  const {stateCode, population, tested, lastUpdated} = stateDetails
  const stateList = statesList.filter(state => state.state_code === stateCode)
  const stateImage = stateList[0].state_image
  const latestDate = new Date(lastUpdated)
  const updatedDate = `${latestDate.toLocaleString('default', {
    day: '2-digit',
  })} ${latestDate.toLocaleString('default', {
    month: 'long',
  })}`
  return (
    <div className="state-image-container">
      <img src={stateImage} alt="state" className="state-image" />
      <div className="state-image-text-container">
        <p className="ncp-text">NCP report</p>
        <div className="population-tested-container">
          <div className="each-container">
            <p className="state-image-text">Population</p>
            <p className="state-image-count">{population}</p>
          </div>
          <div className="each-container">
            <p className="state-image-text">Tested</p>
            <p className="state-image-count">{tested}</p>
            <p className="state-image-date">(As of {updatedDate} per source)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StateImage
