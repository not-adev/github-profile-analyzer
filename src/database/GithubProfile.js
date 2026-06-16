import { DataTypes } from "sequelize";
import sequelize  from"../configs/db.js"

export const GithubProfile = sequelize.define(
  "GithubProfile",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: DataTypes.STRING,
    public_repos: DataTypes.INTEGER,
    followers: DataTypes.INTEGER,
    following: DataTypes.INTEGER,
    account_age_days: DataTypes.INTEGER,
    total_stars: DataTypes.INTEGER,
    profile_score: DataTypes.INTEGER,
    profile_url: DataTypes.STRING,
    most_starred_repo: DataTypes.STRING,
  },
  {
    tableName: "github_profiles",
  }
);

