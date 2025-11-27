import movieModel from "../models/movieModel.js";

// LIST MOVIE
export const listMovie = async (req, res) => {
    try {
        const data = await movieModel
            .find({ createdBy: req.user?.user_id })
            .sort({ createdAt: -1 });

        res.status(200).json({
            message: "Berhasil, LIST MOVIE:",
            data,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

// CREATE MOVIE
export const createNewMovie = async (req, res) => {
    try {
        const { judul, tahunRilis, sutradara } = req.body;

        const movie = await movieModel.create({
            judul,
            tahunRilis,
            sutradara,
            createdBy: req.user?.user_id,
        });

        res.status(201).json({
            message: "Data Movie Berhasil Dibuat",
            data: movie,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

// DETAIL MOVIE
export const detailMovie = async (req, res) => {
    try {
        const id = req.params.id;

        const movie = await movieModel.findOne({
            _id: id,
            createdBy: req.user?.user_id,
        });

        if (!movie) {
            return res.status(404).json({
                message: "Data movie tidak ditemukan",
                data: null,
            });
        }

        return res.status(200).json({
            message: "Berhasil mendapatkan detail movie",
            data: movie,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

// UPDATE MOVIE
export const updateMovie = async (req, res) => {
    try {
        const id = req.params.id;
        const { judul, tahunRilis, sutradara } = req.body;

        const movie = await movieModel.findOneAndUpdate(
            { _id: id, createdBy: req.user?.user_id },
            { judul, tahunRilis, sutradara },
            { new: true }
        );

        if (!movie) {
            return res.status(404).json({
                message: "Informasi data movie gagal diupdate",
                data: null,
            });
        }

        res.status(200).json({
            message: "Informasi data movie berhasil diupdate",
            data: movie,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

// DELETE MOVIE
export const deleteMovie = async (req, res) => {
    try {
        const id = req.params.id;

        const movie = await movieModel.findOneAndDelete({
            _id: id,
            createdBy: req.user?.user_id,
        });

        if (!movie) {
            return res.status(404).json({
                message: "Informasi data movie gagal dihapus",
                data: null,
            });
        }

        res.status(200).json({
            message: "Informasi data movie berhasil dihapus",
            data: null,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};
