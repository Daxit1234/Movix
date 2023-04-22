import React, { useState } from 'react'
import useFetch from '../../../hook/useFetch';
import Carousel from '../../../components/carousel/Carousel';

function Recommandation ({mediaType,id}) {
    const {data,loading}=useFetch(`/${mediaType}/${id}/recommendations`)
  return (
        <Carousel title="Recommandation" data={data?.results} loading={loading} endpoint={mediaType}/>
  )
}

export default Recommandation
