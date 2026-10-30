export function createCruxSettingDefinitions(CruxSettings) {
    return {
        "tray-mode": {
            name: game.i18n.localize("crux.settings.tray-mode.name"),
            hint: game.i18n.localize("crux.settings.tray-mode.hint"),
            scope: "client",
            config: true,
            type: String,
            choices: {
                "auto": game.i18n.localize("crux.settings.tray-mode.auto"),
                "always": game.i18n.localize("crux.settings.tray-mode.always"),
                "manual": game.i18n.localize("crux.settings.tray-mode.manual")
            },
            default: "manual"
        },
        "assume-default-character": {
            name: game.i18n.localize("crux.settings.assume-default-character.name"),
            hint: game.i18n.localize("crux.settings.assume-default-character.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: false
        },
        "allow-player-scene-elevation": {
            name: game.i18n.localize("crux.settings.allow-player-scene-elevation.name"),
            hint: game.i18n.localize("crux.settings.allow-player-scene-elevation.hint"),
            scope: "world",
            config: true,
            restricted: true,
            type: Boolean,
            default: false,
            onChange: () => {
                game.crux?.CruxElevationAppV2?.activeInstance?.render();
            }
        },
        "show-favorites-section": {
            name: game.i18n.localize("crux.settings.show-favorites-section.name"),
            hint: game.i18n.localize("crux.settings.show-favorites-section.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: true
        },
        "show-equipped-section": {
            name: game.i18n.localize("crux.settings.show-equipped-section.name"),
            hint: game.i18n.localize("crux.settings.show-equipped-section.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: true
        },
        "show-features-section": {
            name: game.i18n.localize("crux.settings.show-features-section.name"),
            hint: game.i18n.localize("crux.settings.show-features-section.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: true
        },
        "show-spells-section": {
            name: game.i18n.localize("crux.settings.show-spells-section.name"),
            hint: game.i18n.localize("crux.settings.show-spells-section.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: true
        },
        "show-inventory-section": {
            name: game.i18n.localize("crux.settings.show-inventory-section.name"),
            hint: game.i18n.localize("crux.settings.show-inventory-section.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: true
        },
        "use-tidy5e-sections": {
            name: game.i18n.localize("crux.settings.use-tidy5e-sections.name"),
            hint: game.i18n.localize("crux.settings.use-tidy5e-sections.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: false
        },
        "show-quantity": {
            name: game.i18n.localize("crux.settings.show-quantity.name"),
            hint: game.i18n.localize("crux.settings.show-quantity.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: true
        },
        "show-uses": {
            name: game.i18n.localize("crux.settings.show-uses.name"),
            hint: game.i18n.localize("crux.settings.show-uses.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: true
        },
        "show-no-uses": {
            name: game.i18n.localize("crux.settings.show-no-uses.name"),
            hint: game.i18n.localize("crux.settings.show-no-uses.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: false
        },
        "show-unprepared-cantrips": {
            name: game.i18n.localize("crux.settings.show-unprepared-cantrips.name"),
            hint: game.i18n.localize("crux.settings.show-unprepared-cantrips.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: false
        },
        "show-all-npc-items": {
            name: game.i18n.localize("crux.settings.show-all-npc-items.name"),
            hint: game.i18n.localize("crux.settings.show-all-npc-items.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: false
        },
        "show-spell-dots": {
            name: game.i18n.localize("crux.settings.show-spell-dots.name"),
            hint: game.i18n.localize("crux.settings.show-spell-dots.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: true
        },
        "show-spell-fractions": {
            name: game.i18n.localize("crux.settings.show-spell-fractions.name"),
            hint: game.i18n.localize("crux.settings.show-spell-fractions.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: false
        },
        "sort-alphabetic": {
            name: game.i18n.localize("crux.settings.sort-alphabetic.name"),
            hint: game.i18n.localize("crux.settings.sort-alphabetic.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: false
        },
        "exclude-container-items": {
            name: game.i18n.localize("crux.settings.exclude-container-items.name"),
            hint: game.i18n.localize("crux.settings.exclude-container-items.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: true
        },
        "skill-mode": {
            name: game.i18n.localize("crux.settings.skill-mode.name"),
            hint: game.i18n.localize("crux.settings.skill-mode.hint"),
            scope: "client",
            config: true,
            type: String,
            choices: {
                "none": game.i18n.localize("crux.settings.skill-mode.none"),
                "dropdown": game.i18n.localize("crux.settings.skill-mode.dropdown"),
                "append": game.i18n.localize("crux.settings.skill-mode.append")
            },
            default: "dropdown"
        },
        "skills-expanded": {
            name: game.i18n.localize("crux.settings.skills-expanded.name"),
            hint: game.i18n.localize("crux.settings.skills-expanded.hint"),
            scope: "client",
            config: true,
            type: String,
            choices: {
                "open": game.i18n.localize("crux.settings.skills-expanded.open"),
                "collapsed": game.i18n.localize("crux.settings.skills-expanded.collapsed")
            },
            default: "collapsed"
        },
        "main-sections-expanded": {
            name: game.i18n.localize("crux.settings.main-sections-expanded.name"),
            hint: game.i18n.localize("crux.settings.main-sections-expanded.hint"),
            scope: "client",
            config: true,
            type: String,
            choices: {
                "open": game.i18n.localize("crux.settings.main-sections-expanded.open"),
                "collapsed": game.i18n.localize("crux.settings.main-sections-expanded.collapsed")
            },
            default: "open"
        },
        "sub-sections-expanded": {
            name: game.i18n.localize("crux.settings.sub-sections-expanded.name"),
            hint: game.i18n.localize("crux.settings.sub-sections-expanded.hint"),
            scope: "client",
            config: true,
            type: String,
            choices: {
                "open": game.i18n.localize("crux.settings.sub-sections-expanded.open"),
                "collapsed": game.i18n.localize("crux.settings.sub-sections-expanded.collapsed")
            },
            default: "collapsed"
        },
        "icon-size": {
            name: game.i18n.localize("crux.settings.icon-size.name"),
            hint: game.i18n.localize("crux.settings.icon-size.hint"),
            scope: "client",
            config: true,
            type: String,
            choices: {
                "small": game.i18n.localize("crux.settings.icon-size.small"),
                "medium": game.i18n.localize("crux.settings.icon-size.medium"),
                "large": game.i18n.localize("crux.settings.icon-size.large")
            },
            default: "small"
        },
        "tray-size": {
            name: game.i18n.localize("crux.settings.tray-size.name"),
            hint: game.i18n.localize("crux.settings.tray-size.hint"),
            scope: "client",
            config: true,
            type: Number,
            range: {
                min: 200,
                max: 300,
                step: 1
            },
            default: 230
        },
        "tab-height-multiplier": {
            name: game.i18n.localize("crux.settings.tab-height-multiplier.name"),
            hint: game.i18n.localize("crux.settings.tab-height-multiplier.hint"),
            scope: "client",
            config: true,
            type: Number,
            range: {
                min: 0.5,
                max: 1.5,
                step: 0.05
            },
            default: 1.0,
            onChange: value => {
                CruxSettings._updateTabHeightMultiplier(value);
            }
        },
        "health-overlay-enabled": {
            name: game.i18n.localize("crux.settings.health-overlay-enabled.name"),
            hint: game.i18n.localize("crux.settings.health-overlay-enabled.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: true
        },
        "health-overlay-direction": {
            name: game.i18n.localize("crux.settings.health-overlay-direction.name"),
            hint: game.i18n.localize("crux.settings.health-overlay-direction.hint"),
            scope: "client",
            config: true,
            type: String,
            choices: {
                "up": game.i18n.localize("crux.settings.health-overlay-direction.up"),
                "down": game.i18n.localize("crux.settings.health-overlay-direction.down")
            },
            default: "up"
        },
        "font-family": {
            name: game.i18n.localize("crux.settings.font-family.name"),
            hint: game.i18n.localize("crux.settings.font-family.hint"),
            scope: "client",
            config: true,
            type: String,
            choices: {
                "modesto": game.i18n.localize("crux.settings.font-family.modesto"),
                "signika": game.i18n.localize("crux.settings.font-family.signika"),
                "roboto": game.i18n.localize("crux.settings.font-family.roboto"),
                "carolingian-ui": game.i18n.localize("crux.settings.font-family.carolingian-ui"),
                "custom": game.i18n.localize("crux.settings.font-family.custom")
            },
            default: "modesto"
        },
        "custom-font-family": {
            name: game.i18n.localize("crux.settings.custom-font-family.name"),
            hint: game.i18n.localize("crux.settings.custom-font-family.hint"),
            scope: "client",
            config: true,
            type: String,
            default: ""
        },
        "global-font-size-multiplier": {
            name: game.i18n.localize("crux.settings.global-font-size-multiplier.name"),
            hint: game.i18n.localize("crux.settings.global-font-size-multiplier.hint"),
            scope: "client",
            config: true,
            type: Number,
            range: {
                min: 0.1,
                max: 2,
                step: 0.1
            },
            default: 1.0,
            onChange: value => {
                if (game.crux?.app) {
                    CruxSettings._updateGlobalFontSizeMultiplier();
                }
            }
        },
        "global-font-scale-rebased": {
            name: game.i18n.localize("crux.settings.global-font-scale-rebased.name"),
            scope: "client",
            config: false,
            type: Boolean,
            default: false
        },
        "content-text-size-multiplier": {
            name: game.i18n.localize("crux.settings.content-text-size-multiplier.name"),
            hint: game.i18n.localize("crux.settings.content-text-size-multiplier.hint"),
            scope: "client",
            config: true,
            type: Number,
            range: {
                min: 0.5,
                max: 1.5,
                step: 0.1
            },
            default: 1.0
        },
        "character-name-size-multiplier": {
            name: game.i18n.localize("crux.settings.character-name-size-multiplier.name"),
            hint: game.i18n.localize("crux.settings.character-name-size-multiplier.hint"),
            scope: "client",
            config: true,
            type: Number,
            range: {
                min: 0.5,
                max: 1.5,
                step: 0.1
            },
            default: 1.0,
            onChange: value => {
                if (game.crux?.app) {
                    CruxSettings._updateCharacterNameSizeMultiplier();
                }
            }
        },
        "actor-ability-text-size-multiplier": {
            name: game.i18n.localize("crux.settings.actor-ability-text-size-multiplier.name"),
            hint: game.i18n.localize("crux.settings.actor-ability-text-size-multiplier.hint"),
            scope: "client",
            config: true,
            type: Number,
            range: {
                min: 0.5,
                max: 1.5,
                step: 0.05
            },
            default: 1.0
        },
        "visual-preset": {
            name: game.i18n.localize("crux.settings.visual-preset.name"),
            hint: game.i18n.localize("crux.settings.visual-preset.hint"),
            scope: "client",
            config: true,
            type: String,
            choices: {
                "foundry": game.i18n.localize("crux.settings.visual-preset.foundry"),
                "foundry-light": game.i18n.localize("crux.settings.visual-preset.foundry-light"),
                "black-glass": game.i18n.localize("crux.settings.visual-preset.black-glass"),
                "crimson-knight": game.i18n.localize("crux.settings.visual-preset.crimson-knight"),
                "low-lantern": game.i18n.localize("crux.settings.visual-preset.low-lantern"),
                "arcane-glass": game.i18n.localize("crux.settings.visual-preset.arcane-glass"),
                "silver-steel": game.i18n.localize("crux.settings.visual-preset.silver-steel"),
                "emerald-ward": game.i18n.localize("crux.settings.visual-preset.emerald-ward"),
                "paper-lantern": game.i18n.localize("crux.settings.visual-preset.paper-lantern"),
                "sherbet": game.i18n.localize("crux.settings.visual-preset.sherbet"),
                "carolingian-teal": game.i18n.localize("crux.settings.visual-preset.carolingian-teal"),
                "royal-blood": game.i18n.localize("crux.settings.visual-preset.royal-blood"),
                "dark-sorcery": game.i18n.localize("crux.settings.visual-preset.dark-sorcery"),
                "grass-and-stone": game.i18n.localize("crux.settings.visual-preset.grass-and-stone"),
                "gold-and-chocolate": game.i18n.localize("crux.settings.visual-preset.gold-and-chocolate"),
                "pumpkin-patch": game.i18n.localize("crux.settings.visual-preset.pumpkin-patch"),
                "plum-purple": game.i18n.localize("crux.settings.visual-preset.plum-purple"),
                "gambits-blue": game.i18n.localize("crux.settings.visual-preset.gambits-blue")
            },
            default: "foundry"
        },
        "panel-opacity": {
            name: game.i18n.localize("crux.settings.panel-opacity.name"),
            hint: game.i18n.localize("crux.settings.panel-opacity.hint"),
            scope: "client",
            config: true,
            type: Number,
            range: {
                min: 0,
                max: 1,
                step: 0.05
            },
            default: 0.5
        },
        "element-opacity": {
            name: game.i18n.localize("crux.settings.element-opacity.name"),
            hint: game.i18n.localize("crux.settings.element-opacity.hint"),
            scope: "client",
            config: true,
            type: Number,
            range: {
                min: 0,
                max: 1,
                step: 0.05
            },
            default: 0.7
        },
        "panel-blur": {
            name: game.i18n.localize("crux.settings.panel-blur.name"),
            hint: game.i18n.localize("crux.settings.panel-blur.hint"),
            scope: "client",
            config: true,
            type: Number,
            range: {
                min: 0,
                max: 12,
                step: 0.5
            },
            default: 0.5
        },
        "taskbar-compatibility": {
            name: game.i18n.localize("crux.settings.taskbar-compatibility.name"),
            hint: game.i18n.localize("crux.settings.taskbar-compatibility.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: true,
            onChange: value => {
                const isTaskbarActive = game.modules.get("foundry-taskbar")?.active;
                const taskbar = document.querySelector("#taskbar");
                const taskbarHeight = taskbar?.getBoundingClientRect().height ?? 0;
                const shouldOffsetTray = isTaskbarActive && value && taskbarHeight > 0;
                const offset = shouldOffsetTray ? `${taskbarHeight
                    }px` : '0px';
                CruxSettings.setCruxGlobalVariable('--crux-taskbar-height', `${taskbarHeight || 50
                    }px`);
                CruxSettings.setCruxGlobalVariable('--crux-tray-bottom-offset', offset);
                document.body.classList.toggle("crux-taskbar-compat", shouldOffsetTray);
            }
        },
        "empty-tray-icon": {
            name: game.i18n.localize("crux.settings.empty-tray-icon.name"),
            hint: game.i18n.localize("crux.settings.empty-tray-icon.hint"),
            scope: "client",
            config: true,
            type: String,
            choices: {
                "fa-thin fa-dragon": game.i18n.localize("crux.settings.empty-tray-icon.fa-thin.fa-dragon"),
                "fa-brands fa-d-and-d": game.i18n.localize("crux.settings.empty-tray-icon.fa-brands.fa-d-and-d"),
                "fa-thin fa-helmet-battle": game.i18n.localize("crux.settings.empty-tray-icon.fa-thin.fa-helmet-battle"),
                "fa-thin fa-swords": game.i18n.localize("crux.settings.empty-tray-icon.fa-thin.fa-swords"),
                "fa-thin fa-staff": game.i18n.localize("crux.settings.empty-tray-icon.fa-thin.fa-staff"),
                "fa-thin fa-wand": game.i18n.localize("crux.settings.empty-tray-icon.fa-thin.fa-wand"),
                "fa-thin fa-paw-claws": game.i18n.localize("crux.settings.empty-tray-icon.fa-thin.fa-paw-claws"),
                "fa-thin fa-mandolin": game.i18n.localize("crux.settings.empty-tray-icon.fa-thin.fa-mandolin"),
                "fa-thin fa-bow-arrow": game.i18n.localize("crux.settings.empty-tray-icon.fa-thin.fa-bow-arrow"),
                "fa-thin fa-axe-battle": game.i18n.localize("crux.settings.empty-tray-icon.fa-thin.fa-axe-battle"),
                "fa-thin fa-mace": game.i18n.localize("crux.settings.empty-tray-icon.fa-thin.fa-mace"),
                "fa-thin fa-hammer-war": game.i18n.localize("crux.settings.empty-tray-icon.fa-thin.fa-hammer-war"),
                "fa-thin fa-dagger": game.i18n.localize("crux.settings.empty-tray-icon.fa-thin.fa-dagger"),
                "fa-thin fa-hand-fist": game.i18n.localize("crux.settings.empty-tray-icon.fa-thin.fa-hand-fist"),
                "fa-thin fa-fire-flame": game.i18n.localize("crux.settings.empty-tray-icon.fa-thin.fa-fire-flame"),
                "fa-thin fa-flask-round-potion": game.i18n.localize("crux.settings.empty-tray-icon.fa-thin.fa-flask-round-potion"),
                "fa-thin fa-scroll-old": game.i18n.localize("crux.settings.empty-tray-icon.fa-thin.fa-scroll-old"),
                "fa-thin fa-dungeon": game.i18n.localize("crux.settings.empty-tray-icon.fa-thin.fa-dungeon"),
                "fa-thin fa-eye-evil": game.i18n.localize("crux.settings.empty-tray-icon.fa-thin.fa-eye-evil"),
                "fa-thin fa-dice-d20": game.i18n.localize("crux.settings.empty-tray-icon.fa-thin.fa-dice-d20")
            },
            default: "fa-thin fa-dragon"
        },
        "auto-select-first-activity": {
            name: game.i18n.localize("crux.settings.auto-select-first-activity.name"),
            hint: game.i18n.localize("crux.settings.auto-select-first-activity.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: false
        },
        "clear-targets-on-drag-target": {
            name: game.i18n.localize("crux.settings.clear-targets-on-drag-target.name"),
            hint: game.i18n.localize("crux.settings.clear-targets-on-drag-target.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: true
        },
        "process-compendium-items": {
            name: game.i18n.localize("crux.settings.process-compendium-items.name"),
            hint: game.i18n.localize("crux.settings.process-compendium-items.hint"),
            scope: "client",
            config: true,
            type: Boolean,
            default: false
        }
    }
}
