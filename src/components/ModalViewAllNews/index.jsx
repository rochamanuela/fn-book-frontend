import React, {useState} from 'react'
import Input from '../Input'
import Flag from '../Flag'
import CommentCard from '../CommentCard'
import './style.css'

import { SlEye } from "react-icons/sl"
import { LiaHeart, LiaHeartSolid } from "react-icons/lia"
import { PiShareNetwork } from "react-icons/pi"
import { VscChromeClose } from "react-icons/vsc";

import woman from '../../assets/images/test/Jaliyah Blackwell.png'

const commentData = [
    {
        photo: woman,
        name: "Maria Souza",
        text: "long established fact that a reader will be distracted by the readable content of",
        likes: 20
    },
    {
        photo: woman,
        name: "Maria Santos",
        text: "long established fact that a reader will be distracted by the readable content of",
        likes: 20
    },
    {
        photo: woman,
        name: "Maria Silva",
        text: "long established fact that a reader will be distracted by the readable content of",
        likes: 20
    },
    {
        photo: woman,
        name: "Maria Santos",
        text: "long established fact that a reader will be distracted by the readable content of",
        likes: 20
    },
    {
        photo: woman,
        name: "Maria Silva",
        text: "long established fact that a reader will be distracted by the readable content of",
        likes: 20
    },
    {
        photo: woman,
        name: "Maria Santos",
        text: "long established fact that a reader will be distracted by the readable content of",
        likes: 20
    },
    {
        photo: woman,
        name: "Maria Silva",
        text: "long established fact that a reader will be distracted by the readable content of",
        likes: 20
    },
]

export default function ModalViewAllNews({ data, onClose }) {
    const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(data.likes)

    const handleLike = () => {
        if (liked) {
            setLiked(false)
            setLikeCount(likeCount - 1)
        } else {
            setLiked(true)
            setLikeCount(likeCount + 1)
        }
    }

    console.log(data.flag)
    // teste
    const handleShare = () => {
        const text =
          `Confira esta matéria no FN Book: *${data.title}* \nResultado da verificação: ${data.flag ? "VERDADE" : "MENTIRA"}`;
        const url = "http://localhost:5173/";
        const encodedText = encodeURIComponent(`${text} ${url}`);
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
    
        // Redireciona para o link do WhatsApp
        window.open(whatsappUrl, "_blank");
      };

    return (
        <div className="modal-view-information">
            <div className="modal-view-information-content">
                <button onClick={onClose} className="btn-close"><VscChromeClose /></button>
                <div className="content">
                    <img className="img" src={data.image} />
                    <h1 className="content-title">{data.title}</h1>
                    <p className="content-text">{data.text}</p>
                    <div className="infos">
                        <div className="views">
                            <SlEye size={24} />
                            <p>200</p>
                        </div>
                        <div className="likes">
                            {/* <LiaHeart size={24} />
                            <p>30</p> */}

                            <button onClick={handleLike} className="btn-like">
                                {liked ? <LiaHeartSolid size={24} /> : <LiaHeart size={24} />}
                            </button>
                            <p className="likes-counter">{likeCount}</p>
                        </div>
                        <div className="share">
                            <PiShareNetwork size={24} onClick={handleShare} />
                            <p>30</p>
                        </div>
                        <Flag truth={data.flag} />
                    </div>
                </div>
                <hr />
                <div className="comments">
                    <h1>Comentários</h1>
                    <div className="comments-content">
                        {commentData.map((card) => (
                            <CommentCard
                                name={card.name}
                                photo={card.photo}
                                likes={card.likes}
                                text={card.text}
                            />
                        ))}
                    </div>
                    <Input
                        inputName="comment-text"
                        inputPlaceholder="Adicione um comentário..."
                    />
                </div>
            </div>
        </div>
    )
}