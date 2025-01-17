import Unit from "./unit";
import UnitState, {
    BgStatus,
    BorderStatus,
    UnitText,
} from "../src/types/UnitState";
import { CSSProperties, useState } from "react";
import Modal from "../src/components/Modal";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import styles from "../styles/Home.module.css";
import { OPERATOR_TYPES } from "../src/types/Operator";
import { Trans, useTranslation } from "react-i18next";

export default function Tutorial() {
    function compute_formula_li_style(backgroundColor: string): CSSProperties {
        return {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "1rem",
            borderRadius: "2rem",
            backgroundColor: backgroundColor,
        };
    }
    const FORMULA_LI_OPACITY_STR = "66";
    const CONTENT_LI_STYLE: CSSProperties = {
        marginTop: "0.5rem",
    };

    const { t } = useTranslation();

    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // OPERATOR_TYPES.STIR.symbol

    return (
        <div
            style={{
                marginBottom: "2rem",
            }}
        >
            <Button color="secondary" variant="outlined" onClick={handleOpen}>
                {t("tutorial.title")}
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{ p: 2, fontFamily: "var(--font-family-secondary)" }}>
                    <p
                        style={{
                            fontSize: "0.9rem",
                            marginTop: "0",
                            marginBottom: "0",
                        }}
                    >
                        {t("tutorial.thesisTheme")}
                    </p>
                    <ol
                        style={{
                            width: "30rem",
                            marginTop: "0.5rem",
                            marginBottom: "2rem",
                        }}
                    >
                        <li style={CONTENT_LI_STYLE}>
                            {t("tutorial.thesisLine1")}
                        </li>
                        <li style={CONTENT_LI_STYLE}>
                            {t("tutorial.thesisLine2")}
                        </li>
                    </ol>

                    <p
                        style={{
                            fontSize: "0.9rem",
                            marginTop: "0",
                            marginBottom: "0",
                        }}
                    >
                        {t("tutorial.instructions")}
                    </p>
                    <ol
                        style={{
                            width: "30rem",
                            marginTop: "0.5rem",
                            marginBottom: "2rem",
                        }}
                    >
                        <li style={CONTENT_LI_STYLE}>
                            <Trans t={t} i18nKey={"tutorial.instructionsLine1"}>
                                Only Singleton mechanism ("mech") is available,
                                whose instruction set is [<strong>W</strong>,
                                <strong>A</strong>,<strong>S</strong>,
                                <strong>D</strong>] for movement,{" "}
                                <strong>Z</strong> for pick-up,{" "}
                                <strong>X</strong> for drop, <strong>G</strong>{" "}
                                for block-until-pick-up, and <strong>H</strong>{" "}
                                for block-until-drop
                            </Trans>
                        </li>
                        <li style={CONTENT_LI_STYLE}>
                            <Trans t={t} i18nKey="tutorial.instructionsLine2">
                                More on <strong>G</strong>: the mech will wait
                                at this instruction until its location has a
                                free atom to be picked up. It then picks up the
                                free atom in the same frame, and proceed to its
                                next instruction in the next frame. If the mech
                                is closed when encountering this instruction
                                (i.e. not able to pick up), this instruction is
                                treated as no-op.
                            </Trans>
                        </li>
                        <li style={CONTENT_LI_STYLE}>
                            <Trans t={t} i18nKey="tutorial.instructionsLine3">
                                More on <strong>H</strong>: the mech will wait
                                at this instruction until its location is empty
                                for drop-off. It then drops off the atom in
                                possession in the same frame, and proceed to its
                                next instruction in the next frame. If the mech
                                is open when encountering this instruction (i.e.
                                not possessing an atom for drop-off), this
                                instruction is treated as no-op.
                            </Trans>
                        </li>
                        <li style={CONTENT_LI_STYLE}>
                            {t("tutorial.instructionsLine4")}
                        </li>
                        <li style={CONTENT_LI_STYLE}>
                            {t("tutorial.instructionsLine5")}
                        </li>
                        <li style={CONTENT_LI_STYLE}>
                            {t("tutorial.instructionsLine6")}
                        </li>
                        <li style={CONTENT_LI_STYLE}>
                            {t("tutorial.instructionsLine7")}
                        </li>
                        <li style={CONTENT_LI_STYLE}>
                            {t("tutorial.instructionsLine8")}
                        </li>
                    </ol>

                    <p
                        style={{
                            fontSize: "0.9rem",
                            marginTop: "0",
                            marginBottom: "0",
                        }}
                    >
                        {t("tutorial.costTitle")}
                    </p>
                    <p
                        style={{
                            fontSize: "0.8rem",
                            marginTop: "0.5rem",
                            marginBottom: "0",
                        }}
                    >
                        {t("tutorial.staticCostTitle")}
                    </p>
                    <ol
                        style={{
                            width: "30rem",
                            marginTop: "0.5rem",
                            marginBottom: "2rem",
                        }}
                    >
                        <li style={CONTENT_LI_STYLE}>
                            {t("tutorial.staticCostLine1")}
                        </li>
                        <li style={CONTENT_LI_STYLE}>
                            {t("tutorial.staticCostLine2")}
                        </li>
                        <li style={CONTENT_LI_STYLE}>
                            {t("tutorial.staticCostLine3")}
                        </li>
                        <li style={CONTENT_LI_STYLE}>
                            {t("tutorial.staticCostLine4")}
                        </li>
                        <li style={CONTENT_LI_STYLE}>
                            {t("tutorial.staticCostLine5")}
                        </li>
                    </ol>

                    <p
                        style={{
                            fontSize: "0.8rem",
                            marginTop: "0.5rem",
                            marginBottom: "0",
                        }}
                    >
                        {t("tutorial.dynamicCostTitle")}
                    </p>
                    <ol
                        style={{
                            width: "30rem",
                            marginTop: "0.5rem",
                            marginBottom: "2rem",
                        }}
                    >
                        <li style={CONTENT_LI_STYLE}>
                            {t("tutorial.dynamicCostLine1")}
                        </li>
                        <li style={CONTENT_LI_STYLE}>
                            {t("tutorial.dynamicCostLine2")}
                        </li>
                        <li style={CONTENT_LI_STYLE}>
                            {t("tutorial.dynamicCostLine3")}
                        </li>
                        <li style={CONTENT_LI_STYLE}>
                            {t("tutorial.dynamicCostLine4")}
                        </li>
                        <li style={CONTENT_LI_STYLE}>
                            {t("tutorial.dynamicCostLine5")}
                        </li>
                    </ol>

                    <p
                        style={{
                            fontSize: "0.9rem",
                            marginTop: "0",
                            marginBottom: "0",
                        }}
                    >
                        {t("tutorial.formulaList")}
                    </p>
                    <ol
                        style={{
                            width: "30rem",
                            marginTop: "0.5rem",
                            marginBottom: "2rem",
                        }}
                    >
                        <li
                            style={compute_formula_li_style(
                                OPERATOR_TYPES.STIR.color +
                                    FORMULA_LI_OPACITY_STR
                            )}
                        >
                            <p className={styles.input_name}>{t("Stir ")}</p>
                            {OPERATOR_TYPES.STIR.symbol}(
                            <Unit
                                state={{
                                    bg_status: BgStatus.ATOM_VANILLA_FREE,
                                    border_status: null,
                                    unit_text: UnitText.EMPTY,
                                    unit_id: null,
                                }}
                                handleMouseOut={() => {}}
                                handleMouseOver={() => {}}
                                mechHighlight={false}
                                isSmall={true}
                            />
                            ,
                            <Unit
                                state={{
                                    bg_status: BgStatus.ATOM_VANILLA_FREE,
                                    border_status: null,
                                    unit_text: UnitText.EMPTY,
                                    unit_id: null,
                                }}
                                handleMouseOut={() => {}}
                                handleMouseOver={() => {}}
                                mechHighlight={false}
                                isSmall={true}
                            />
                            )
                            <p
                                style={{
                                    marginLeft: "0.5rem",
                                    marginRight: "0.5rem",
                                }}
                            >
                                =
                            </p>
                            <Unit
                                state={{
                                    bg_status: BgStatus.ATOM_HAZELNUT_FREE,
                                    border_status: null,
                                    unit_text: UnitText.EMPTY,
                                    unit_id: null,
                                }}
                                handleMouseOut={() => {}}
                                handleMouseOver={() => {}}
                                mechHighlight={false}
                                isSmall={true}
                            />
                        </li>

                        <li
                            style={compute_formula_li_style(
                                OPERATOR_TYPES.SHAKE.color +
                                    FORMULA_LI_OPACITY_STR
                            )}
                        >
                            <p className={styles.input_name}>{t("Shake")}</p>
                            {OPERATOR_TYPES.SHAKE.symbol}(
                            <Unit
                                state={{
                                    bg_status: BgStatus.ATOM_HAZELNUT_FREE,
                                    border_status: null,
                                    unit_text: UnitText.EMPTY,
                                    unit_id: null,
                                }}
                                handleMouseOut={() => {}}
                                handleMouseOver={() => {}}
                                mechHighlight={false}
                                isSmall={true}
                            />
                            ,
                            <Unit
                                state={{
                                    bg_status: BgStatus.ATOM_HAZELNUT_FREE,
                                    border_status: null,
                                    unit_text: UnitText.EMPTY,
                                    unit_id: null,
                                }}
                                handleMouseOut={() => {}}
                                handleMouseOver={() => {}}
                                mechHighlight={false}
                                isSmall={true}
                            />
                            )
                            <p
                                style={{
                                    marginLeft: "0.5rem",
                                    marginRight: "0.5rem",
                                }}
                            >
                                =
                            </p>
                            <Unit
                                state={{
                                    bg_status: BgStatus.ATOM_CHOCOLATE_FREE,
                                    border_status: null,
                                    unit_text: UnitText.EMPTY,
                                    unit_id: null,
                                }}
                                handleMouseOut={() => {}}
                                handleMouseOver={() => {}}
                                mechHighlight={false}
                                isSmall={true}
                            />
                        </li>

                        <li
                            style={compute_formula_li_style(
                                OPERATOR_TYPES.STEAM.color +
                                    FORMULA_LI_OPACITY_STR
                            )}
                        >
                            <p className={styles.input_name}>{t("Steam")}</p>
                            {OPERATOR_TYPES.STEAM.symbol}(
                            <Unit
                                state={{
                                    bg_status: BgStatus.ATOM_HAZELNUT_FREE,
                                    border_status: null,
                                    unit_text: UnitText.EMPTY,
                                    unit_id: null,
                                }}
                                handleMouseOut={() => {}}
                                handleMouseOver={() => {}}
                                mechHighlight={false}
                                isSmall={true}
                            />
                            ,
                            <Unit
                                state={{
                                    bg_status: BgStatus.ATOM_CHOCOLATE_FREE,
                                    border_status: null,
                                    unit_text: UnitText.EMPTY,
                                    unit_id: null,
                                }}
                                handleMouseOut={() => {}}
                                handleMouseOver={() => {}}
                                mechHighlight={false}
                                isSmall={true}
                            />
                            ,
                            <Unit
                                state={{
                                    bg_status: BgStatus.ATOM_CHOCOLATE_FREE,
                                    border_status: null,
                                    unit_text: UnitText.EMPTY,
                                    unit_id: null,
                                }}
                                handleMouseOut={() => {}}
                                handleMouseOver={() => {}}
                                mechHighlight={false}
                                isSmall={true}
                            />
                            )
                            <p
                                style={{
                                    marginLeft: "0.5rem",
                                    marginRight: "0.5rem",
                                }}
                            >
                                =
                            </p>
                            <Unit
                                state={{
                                    bg_status: BgStatus.ATOM_TRUFFLE_FREE,
                                    border_status: null,
                                    unit_text: UnitText.EMPTY,
                                    unit_id: null,
                                }}
                                handleMouseOut={() => {}}
                                handleMouseOver={() => {}}
                                mechHighlight={false}
                                isSmall={true}
                            />{" "}
                            ,
                            <Unit
                                state={{
                                    bg_status: BgStatus.ATOM_VANILLA_FREE,
                                    border_status: null,
                                    unit_text: UnitText.EMPTY,
                                    unit_id: null,
                                }}
                                handleMouseOut={() => {}}
                                handleMouseOver={() => {}}
                                mechHighlight={false}
                                isSmall={true}
                            />
                        </li>

                        <li
                            style={compute_formula_li_style(
                                OPERATOR_TYPES.SMASH.color +
                                    FORMULA_LI_OPACITY_STR
                            )}
                        >
                            <p className={styles.input_name}>{t("Smash")}</p>
                            {OPERATOR_TYPES.SMASH.symbol}(
                            <Unit
                                state={{
                                    bg_status: BgStatus.ATOM_TRUFFLE_FREE,
                                    border_status: null,
                                    unit_text: UnitText.EMPTY,
                                    unit_id: null,
                                }}
                                handleMouseOut={() => {}}
                                handleMouseOver={() => {}}
                                mechHighlight={false}
                                isSmall={true}
                            />
                            )
                            <p
                                style={{
                                    marginLeft: "0.5rem",
                                    marginRight: "0.5rem",
                                }}
                            >
                                =
                            </p>
                            <Unit
                                state={{
                                    bg_status: BgStatus.ATOM_VANILLA_FREE,
                                    border_status: null,
                                    unit_text: UnitText.EMPTY,
                                    unit_id: null,
                                }}
                                handleMouseOut={() => {}}
                                handleMouseOver={() => {}}
                                mechHighlight={false}
                                isSmall={true}
                            />{" "}
                            ,
                            <Unit
                                state={{
                                    bg_status: BgStatus.ATOM_VANILLA_FREE,
                                    border_status: null,
                                    unit_text: UnitText.EMPTY,
                                    unit_id: null,
                                }}
                                handleMouseOut={() => {}}
                                handleMouseOver={() => {}}
                                mechHighlight={false}
                                isSmall={true}
                            />{" "}
                            ,
                            <Unit
                                state={{
                                    bg_status: BgStatus.ATOM_VANILLA_FREE,
                                    border_status: null,
                                    unit_text: UnitText.EMPTY,
                                    unit_id: null,
                                }}
                                handleMouseOut={() => {}}
                                handleMouseOver={() => {}}
                                mechHighlight={false}
                                isSmall={true}
                            />{" "}
                            ,
                            <Unit
                                state={{
                                    bg_status: BgStatus.ATOM_VANILLA_FREE,
                                    border_status: null,
                                    unit_text: UnitText.EMPTY,
                                    unit_id: null,
                                }}
                                handleMouseOut={() => {}}
                                handleMouseOver={() => {}}
                                mechHighlight={false}
                                isSmall={true}
                            />
                            ,
                            <Unit
                                state={{
                                    bg_status: BgStatus.ATOM_SAFFRON_FREE,
                                    border_status: null,
                                    unit_text: UnitText.EMPTY,
                                    unit_id: null,
                                }}
                                handleMouseOut={() => {}}
                                handleMouseOver={() => {}}
                                mechHighlight={false}
                                isSmall={true}
                            />
                        </li>
                    </ol>

                    <p
                        style={{
                            fontSize: "0.9rem",
                            marginTop: "0",
                            marginBottom: "0",
                        }}
                    >
                        {t("tutorial.goal")}
                    </p>
                    <ol
                        style={{
                            width: "30rem",
                            marginTop: "0.5rem",
                            marginBottom: "2rem",
                        }}
                    >
                        <li style={compute_formula_li_style("#FFFFFFFF")}>
                            <Trans t={t} i18nKey="tutorial.goalAffordance">
                                With Faucet replenishing
                                <Unit
                                    state={{
                                        bg_status: BgStatus.ATOM_VANILLA_FREE,
                                        border_status: null,
                                        unit_text: UnitText.EMPTY,
                                        unit_id: null,
                                    }}
                                    handleMouseOut={() => {}}
                                    handleMouseOver={() => {}}
                                    mechHighlight={false}
                                    isSmall={true}
                                />
                                at 1 unit per frame,
                            </Trans>
                        </li>
                        <li style={compute_formula_li_style("#FFFFFFFF")}>
                            <Trans t={t} i18nKey="tutorial.goalDeliver">
                                Produce and deliver
                                <Unit
                                    state={{
                                        bg_status: BgStatus.ATOM_SAFFRON_FREE,
                                        border_status: null,
                                        unit_text: UnitText.EMPTY,
                                        unit_id: null,
                                    }}
                                    handleMouseOut={() => {}}
                                    handleMouseOver={() => {}}
                                    mechHighlight={false}
                                    isSmall={true}
                                />
                                to Sink.
                            </Trans>
                        </li>
                        <li style={compute_formula_li_style("#FFFFFFFF")}>
                            {t("tutorial.goalLine2")}
                        </li>
                        <li style={compute_formula_li_style("#FFFFFFFF")}>
                            {t("tutorial.goalLine3_1")}
                            <a
                                href="https://stardisc.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="stardisc"
                            >
                                <u>
                                    <strong>StarDisc</strong>
                                </u>
                            </a>
                            {t("tutorial.goalLine3_2")}
                        </li>
                    </ol>
                </Box>
            </Modal>
        </div>
    );
}
