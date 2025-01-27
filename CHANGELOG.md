# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.3.0] - 2022-03-09
### Added
- `/play` has a new `split` option that will split queued YouTube videos into chapters, if the video has them
- `/resume` command to resume playback

### Changed
- `query` is now a required parameter from `/play`

### Removed
- `/play` cannot resume the playback anymore since `query` is now required

## [1.2.0] - 2022-02-24
### Added
- `/stop` command to disconnect and clear the queue

## [1.1.2] - 2022-02-21
### Changed
- Bumped dependencies

## [1.1.1] - 2022-02-12
### Fixed
- `/config set-wait-after-queue-empties` now works (fixed typo)

## [1.1.0] - 2022-02-11
### Changed
- Muse now stays in a voice channel after the queue finishes for 30 seconds by default. This behavior can be changed with `/config set-wait-after-queue-empties`.

## [1.0.0] - 2022-02-05
### Changed
- Migrated to [Slash Commands](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ)
- Upgrading **will cause unavoidable data loss**. Because slash commands work differently, **all shortcuts will be lost**. Functionality similar to shortcuts is provided by the `/favorites` command.
- Because slash commands require different permissions, **you must kick Muse and re-add Muse to your server** before you can use the bot.

## [0.5.4] - 2022-02-01
### Fixed
- Prisma no longer causes a crash when running on Windows

## [0.5.3] - 2022-02-01
### Changed
- Environment variable values are now trimmed (whitespace is removed)

## [0.5.2] - 2022-01-29
### Fixed
- Playing livestreams now works again

## [0.5.1] - 2022-01-25
### Fixed
- Queueing Spotify playlists could sometimes fail when a song wasn't found on YouTube

## [0.5.0] - 2022-01-21
### Changed
- Queue embeds are now more detailed and appear when resuming playback. Thanks @bokherus!

## [0.4.0] - 2022-01-17
### Added
- Playlists can now be shuffled as they are added to the queue, using the `shuffle` option to `play`.

## [0.3.2] - 2022-01-17
### Fixed
- The SQLite database path is now correctly generated on Windows

### Changed
- Track lookups no longer fail silently (error is returned and logged)

## [0.3.1] - 2022-01-06
### Fixed
- Prisma client and migrations are no longer broken in built Docker images

## [0.3.0] - 2022-01-05
### Changed
- Migrated from Sequelize to Prisma. (#456)
- Bumped dependencies

## [0.2.1] - 2021-12-18
### Added
- [release-it](https://www.npmjs.com/package/release-it): makes it easier to generate new tags and releases

## [0.2.0]
### Added
- A custom track limit can now be set when queueing playlists from Spotify (default stays at 50). See #370.

## [0.1.1]
### Fixed
- Fixes a race condition in the file cache service (see #420)

## [0.1.0]
### Added
- Initial release

[Unreleased]: https://github.com/codetheweb/muse/compare/v1.3.0...HEAD
[1.3.0]: https://github.com/codetheweb/muse/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/codetheweb/muse/compare/v1.1.2...v1.2.0
[1.1.2]: https://github.com/codetheweb/muse/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/codetheweb/muse/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/codetheweb/muse/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/codetheweb/muse/compare/v0.5.4...v1.0.0
[0.5.4]: https://github.com/codetheweb/muse/compare/v0.5.3...v0.5.4
[0.5.3]: https://github.com/codetheweb/muse/compare/v0.5.2...v0.5.3
[0.5.2]: https://github.com/codetheweb/muse/compare/v0.5.1...v0.5.2
[0.5.1]: https://github.com/codetheweb/muse/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/codetheweb/muse/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/codetheweb/muse/compare/v0.3.2...v0.4.0
[0.3.2]: https://github.com/codetheweb/muse/compare/v0.3.1...v0.3.2
[0.3.1]: https://github.com/codetheweb/muse/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/codetheweb/muse/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/codetheweb/muse/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/codetheweb/muse/releases/tag/v0.2.0
[0.1.1]: https://github.com/codetheweb/muse/releases/tag/v0.1.1
[0.1.0]: https://github.com/codetheweb/muse/releases/tag/v0.1.0
