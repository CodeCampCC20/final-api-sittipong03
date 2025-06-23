import prisma from "../config/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/create-error.utils.js";

const meController = {}

meController.getMeUser = async (req, res, next) => {
    try {
        const id = req.data.id
        const result = await prisma.user.findFirst({
            where: { id: Number(id) }
        })
        res.json({ id: result.id, username: result.username })

    } catch (error) {
        next(error)

    }

}

meController.patchMeUser = async (req, res, next) => {
    try {
        const id = req.data.id
        const body = req.body
        if (!body) {
            createError(400, "Bad Request")
        }
        // patch somethings here
        const result = await prisma.user.findFirst({
            where: { id: Number(id) }
        })
        res.json({ id: result.id, username: result.username })

    } catch (error) {
        next(error)

    }

}

meController.getMeDoctor = async (req, res, next) => {
    try {
        const id = req.data.id
        const result = await prisma.doctor.findFirst({
            where: { id: Number(id) }
        })
        res.json({ id: result.id, username: result.username, specialization: result.specialization })

    } catch (error) {
        next(error)

    }

}

meController.patchMeDoctor = async (req, res, next) => {
    try {
        const id = req.data.id
        const body = req.body
        if (!body) {
            createError(400, "Bad Request")
        }
        const result = await prisma.doctor.update({
            where: {
                id: Number(id)
            },
            data: {
                specialization: body.specialization
            }
        })
        res.json({ id: result.id, username: result.username, specialization: result.specialization })

    } catch (error) {
        next(error)

    }

}





export default meController