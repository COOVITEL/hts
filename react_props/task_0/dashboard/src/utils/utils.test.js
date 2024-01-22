import { getLatestNotification } from "./utils";

test("getLatesNotificacion return the correct html format", () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD")
})
