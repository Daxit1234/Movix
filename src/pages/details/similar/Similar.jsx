import React, { useState } from 'react'
import useFetch from '../../../hook/useFetch';
import Carousel from '../../../components/carousel/Carousel';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

function Similar({ mediaType, id }) {
    const { data, loading } = useFetch(`/${mediaType}/${id}/similar`)
    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies"
    return (
            <Carousel title={title} data={data?.results} loading={loading} endpoint={mediaType} />
    )
}

export default Similar
