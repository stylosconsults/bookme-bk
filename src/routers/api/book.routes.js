import express from 'express';
import { protect } from '../../controllers/authentication';
import { booking, getAllBookings, getSingleBooking } from '../../controllers/bookController';
const router = express.Router();


router.get('/',protect, getAllBookings);
router.post('/',booking);
// router.put('/:id', protect, uploads.single('image'), updateAccomodation);
// router.delete('/:id', protect, deleteAccomodation);
router.get('/:id',protect, getSingleBooking);

// router.put('/like/:id', protect, updateLike);
// router.get('/like/:id', getLikes);

export default router;
