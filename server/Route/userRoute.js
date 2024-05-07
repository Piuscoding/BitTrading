const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');



router.get('/dashboard',userController.dashboardPage);

router.get('/verify',userController.verifyPage);
router.post('/verify/:id', userController.verifyPage_post);

router.get('/account/:id',userController.accountPage)
router.put('/account/:id',userController.accountPage_post)

router.get('/editProfile',userController.editProfilePage);
router.get('/transactions/:id',userController.transactionPage);


router.get('/accountUpgrade',userController.upgradePage);


router.get('/deposit', userController.depositPage);


router.get('/withdrawal',userController.widthdrawPage);
router.post('/withdrawal/:id',userController.widthdrawPage_post);
// router.get('/widthdrawHistory/:id',userController.widthdrawHistory);


 router.get('/merchants', userController.buyCrypto)

 router.get('/settings', userController.settingPage)
 router.get('/charts', userController.chartPage)
 router.get('/quotes', userController.quotePage)
 router.get('/calendar', userController.calendar)
 router.get('/managers', userController.manager)


module.exports = router;
