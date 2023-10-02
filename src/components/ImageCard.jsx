import React from 'react'
import { motion } from "framer-motion"

export const ImageCard = ({imgUrl}) => {
    const cardVariant = {
        offscreen: {
            opacity: 0
        },
        onscreen: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    }
    return (
        <motion.div
            variants={cardVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className='img-card'>
            <img src={imgUrl} alt="image"></img>
        </motion.div>
    )
}
