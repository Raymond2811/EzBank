const { User, Checkings, AccOverview } = require("../models");
const userData = require("./userData");
const checkingsData = require("./CheckingsData");
const accOverviewData = require("./AccOverviewData");
const sequelize = require("../config/connection");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  try {
    console.log("----- SEEDING DATABASE STARTED -----\n");

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    console.log(`----- ${users.length} USERS SEEDED -----\n`);

    const checkingsWithUserIds = checkingsData.map((checkings, index) => ({
      ...checkings,
      user_id: users[index % users.length].id,
    }));
    const checkings = await Checkings.bulkCreate(checkingsWithUserIds, {
      returning: true,
    });
    console.log(`----- ${checkings.length} CHECKING ACCOUNTS SEEDED -----\n`);

    const accOverviewDataWithTransactions = accOverviewData.map((entry) => ({
      ...entry,
      transactions: entry.transactions.join(", "),
    }));

    const accOverview = await AccOverview.bulkCreate(
      accOverviewDataWithTransactions,
      { returning: true },
    );
    console.log(
      `----- ${accOverview.length} ACCOVERVIEW ENTRIES SEEDED -----\n`,
    );

    console.log("----- SEEDING DATABASE COMPLETED -----\n");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
