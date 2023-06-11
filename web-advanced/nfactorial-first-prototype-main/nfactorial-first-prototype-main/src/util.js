import { v4 as uuidv4} from 'uuid'

function Audio() {
    return [
        {
            name: "Бірінші сөз",
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2z8d3mOHvdZB_1DHrca3fiew3Qv27r3FXfEFkBiKbS9N28by-",
            artist: "Абай",
            audio: "https://www.muftyat.kz/media/muftyat/374229_1409650560.mp3",
            color: [],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Екінші сөз",
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2z8d3mOHvdZB_1DHrca3fiew3Qv27r3FXfEFkBiKbS9N28by-",
            artist: "Абай",
            audio: "https://www.muftyat.kz/media/muftyat/272727_1409650666.mp3",
            color: [],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Үшінші сөз",
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2z8d3mOHvdZB_1DHrca3fiew3Qv27r3FXfEFkBiKbS9N28by-",
            artist: "Абай",
            audio: "https://www.muftyat.kz/media/muftyat/614544_1409650769.mp3",
            color: [],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Төртінші сөз",
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2z8d3mOHvdZB_1DHrca3fiew3Qv27r3FXfEFkBiKbS9N28by-",
            artist: "Абай",
            audio: "https://www.muftyat.kz/media/muftyat/992847_1409650924.mp3",
            color: [],
            id: uuidv4(),
            active: false,
        }
    ]
}

export default Audio;