# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Trail.create!(trail_forks_id: 64411, name: 'Cadillac River Runner', description: 'This is a cross country-style trail that also utilizes the bow river pathway to link up sections, and is best ridden at low water.', length: 3.3, difficulty: 3, coded_path: "{mqvH`_kwT[kCJc@Eu@}@aD]a@KYUOYu@Uc@UUo@aE_AmDGo@i@uC_@yAg@aBe@uD_@}B[gAiBoEa@sAGa@JIvEoBBQQ}As@e@Sq@c@gAe@uBm@cAm@gBkBqDuB_Fn@uBa@uCBs@UiBkB`@LvAVl@BrAcBqAm@cAuAiEeCkHu@uDb@Us@qASw@I}@[`@WwC[qB]iDXoCMuALsDXiBdA\d@eBFkBb@aBdBgBjAgAvAiAv@a@vAkBVtAo@jBeA|Ao@zBo@tCDf@lBL")

Trail.create!(trail_forks_id: 156216, name: 'Pip Gravel Path', description: "Prince's Island Park gravel path.", length: 0.993, difficulty: 1, coded_path: "_orvHbqgwTUo@QWsBSw@aC_@}BGsBH_ARk@?}AWmDBs@TuAUi@gAy@QBSAU[Qk@?mAw@s@CwBB}@H{@Pg@fBaB?yCD_@Ve@TQTs@r@Tv@|@\j@")

User.create!(name: "Cristof")

Rating.create!(feedback: 3, trails_id: 1, users_id: 1)

Comment.create!(data: "Pretty nice could use some work", trails_id: 1, users_id: 1)

TrailSolution.create!(description_to_fix: "SO MANY TREE'S", timeline_days: 10, cost: 250, collaboration: "myself", trails_id: 1, users_id: 1)