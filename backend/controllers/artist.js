const ArtistControllers = {
    uploadSong: async (req,res) => {
        const { artistid, song } = req.body();
        res.status(400).send({
            message:'successfull operation',
            data: song
        })

    }
}