
export type Locale = 'en' | 'es' | 'fr';

export type Translations = {
  // AppHeader
  addActivity: string;
  manageCategories: string;
  language: string;
  english: string;
  spanish: string;
  french: string;
  theme: string;
  lightTheme: string;
  darkTheme: string;
  systemTheme: string;
  moreOptions: string;
  moreOptionsDesktop: string;
  personalMode: string;
  workMode: "Work"; 
  switchToPersonalMode: string;
  switchToWorkMode: string;
  logout: string;
  changePassword: string;
  dashboard: string;
  notificationsTitle: string;
  noNotificationsYet: string;
  notificationUnread: string;
  markAllAsRead: string;
  clearAllNotifications: string;
  notificationBellLabel: string;
  viewHistory: string;
  enableSystemNotifications: string;
  systemNotificationsEnabled: string;
  systemNotificationsBlocked: string;
  enableSystemNotificationsDescription: string;
  systemNotificationsNowActive: string;
  systemNotificationsUserDenied: string;
  systemNotificationsNotYetEnabled: string;
  systemNotificationsDismissed: string;
  manageAssignees: string;
  timezoneSettingTitle: string;
  currentTimezoneLabel: (params: { tz: string }) => string;
  useSystemTimezone: string;


  // CategoriesPage
  backToCalendar: string;
  addCategory: string;
  editCategory: string;
  addNewCategory: string;
  updateCategoryDetails: string;
  createCategoryDescription: string;
  categoryName: string;
  iconName: string;
  iconNameDescriptionLink: string;
  categoryMode: string;
  modePersonal: string;
  modeWork: string;
  modeAll: string;
  saveChanges: string;
  cancel: string;
  existingCategories: string;
  viewEditManageCategories: string;
  delete: string;
  confirmDelete: string;
  confirmDeleteCategoryDescription: (params: { categoryName: string }) => string;
  categoriesCount: (params: { count: number }) => string;
  noCategoriesYet: string;

  // AssigneesPage
  addNewAssignee: string;
  editAssignee: string;
  assigneeNameLabel: string;
  assigneeNamePlaceholder: string;
  usernameLabel: string;
  usernamePlaceholder: string;
  usernameMinLength: (params: { length: number }) => string;
  usernameIsRequired: string;
  passwordLabel: string;
  newPasswordOptionalLabel: string;
  enterPasswordPlaceholder: string;
  leaveBlankToKeepCurrent: string;
  confirmPasswordLabel: string;
  confirmPasswordPlaceholder: string;
  passwordIsRequiredForCreation: string;
  createAssigneeDescription: string;
  updateAssigneeDetails: string;
  existingAssignees: string;
  viewEditManageAssignees: string;
  confirmDeleteAssigneeDescription: (params: { assigneeName: string }) => string;
  assigneesCount: (params: { count: number }) => string;
  noAssigneesYet: string;
  usernameTakenErrorTitle: string;
  usernameTakenErrorDescription: (params: { username: string }) => string;
  administratorLabel: string;
  adminBadge: string;
  adminStatusEditDisabled: string;
  passwordComplexityRequirements: string; 
  passwordRequiresLowercase: string; 
  passwordRequiresUppercase: string; 
  passwordRequiresNumber: string; 
  passwordRequiresSymbol: string; 


  // ActivityEditorPage
  editActivityTitle: string;
  addActivityTitle: string;
  editActivityDescription: (params: { formattedInitialDate: string }) => string;
  addActivityDescription: (params: { formattedInitialDate: string }) => string;
  activityTitleLabel: string;
  categoryLabel: string;
  selectCategoryPlaceholder: string;
  loadingCategoriesPlaceholder: string;
  activityDateLabel: string;
  pickADate: string;
  activityTimeLabel: string;
  activityTimeDescription24Hour: string;
  invalidTimeFormat24Hour: string;
  activityNotesLabel: string;
  activityNotesPlaceholder: string;
  todosLabel: string;
  addTodo: string;
  newTodoPlaceholder: string;
  toastActivityUpdatedTitle: string;
  toastActivityUpdatedDescription: string;
  toastActivityAddedTitle: string;
  toastActivityAddedDescription: string;
  recurrenceLabel: string; 
  recurrenceTypeLabel: string;
  recurrenceNone: string;
  recurrenceDaily: string;
  recurrenceWeekly: string;
  recurrenceMonthly: string;
  recurrenceEndDateLabel: string;
  recurrenceNoEndDate: string;
  recurrencePickEndDate: string;
  recurrenceDaysOfWeekLabel: string;
  recurrenceDayOfMonthLabel: string;
  recurrenceDayOfMonthPlaceholder: string;
  recurrenceClearEndDate: string;
  daySun: string;
  dayMon: string;
  dayTue: string;
  dayWed: string;
  dayThu: string;
  dayFri: string;
  daySat: string;
  responsiblePeopleLabel: string;
  selectResponsiblePersonPlaceholder: string;
  unassigned: string;
  noAssigneesForSelection: string;


  // ActivityCalendarView
  activitiesForDate: (params: { date: string }) => string;
  activitiesForWeek: (params: { startDate: string; endDate: string }) => string;
  activitiesForMonth: (params: { month: string }) => string;
  loadingDate: string;
  noActivitiesForDay: string;
  noActivitiesForPeriod: string;
  selectDateToSeeActivities: string;
  confirmDeleteActivityTitle: string;
  confirmDeleteActivityDescription: (params: { activityTitle: string }) => string;
  toastActivityDeletedTitle: string;
  toastActivityDeletedDescription: (params: { activityTitle: string }) => string;
  todayButton: string;
  viewDaily: string;
  viewWeekly: string;
  viewMonthly: string;
  allActivitiesCompleted: string;
  habitsForDayTitle: string;
  noHabitsForDay: string;
  markAsComplete: string;


  // ActivityListItem
  editActivitySr: string;
  deleteActivitySr: string;
  addToCalendarSr: string;
  todosCompleted: (params: { completed: number, total: number }) => string;
  noDetailsAvailable: string;
  noTodosForThisActivity: string;
  recurrenceDailyText: string;
  recurrenceWeeklyText: string;
  recurrenceMonthlyText: string;


  // LoginPage
  loginWelcomeMessage: string;
  loginUsernameLabel: string;
  loginPasswordLabel: string;
  loginUsernamePlaceholder: string;
  loginPasswordPlaceholder: string;
  loginButtonText: string;
  loginLoggingIn: string;
  loginInvalidCredentials: string;
  loginErrorTitle: string;
  loginUsernameRequired: string;
  loginPasswordRequired: string;
  loginSecurityNoticeBackend: string; 
  loginRedirecting: string;
  rememberMeLabel: string; 
  showPassword?: string;
  hidePassword?: string;


  // ChangePasswordModal
  changePasswordModalTitle: string;
  changePasswordModalDescription: string;
  currentPasswordLabel: string;
  newPasswordLabel: string;
  confirmNewPasswordLabel: string;
  currentPasswordPlaceholder: string;
  newPasswordPlaceholder: string;
  confirmNewPasswordPlaceholder: string;
  updatePasswordButton: string;
  passwordUpdateSuccessTitle: string;
  passwordUpdateSuccessDescription: string; 
  passwordUpdateErrorIncorrectCurrent: string;
  passwordUpdateErrorNewPasswordRequired: string;
  passwordUpdateErrorConfirmPasswordRequired: string;
  passwordUpdateErrorPasswordsDoNotMatch: string;
  passwordUpdateErrorCurrentEqualsNew: string;
  passwordMinLength: (params: { length: number }) => string;
  passwordUpdateFailedError: string;


  // AppProvider Toasts & Notifications
  toastCategoryAddedTitle: string;
  toastCategoryAddedDescription: (params: { categoryName: string }) => string;
  toastCategoryUpdatedTitle: string;
  toastCategoryUpdatedDescription: (params: { categoryName: string }) => string;
  toastCategoryDeletedTitle: string;
  toastCategoryDeletedDescription: (params: { categoryName: string }) => string;
  toastActivityStartingSoonTitle: string;
  toastActivityStartingSoonDescription: (params: { activityTitle: string, activityTime: string }) => string;
  toastActivityTomorrowTitle: string;
  toastActivityTomorrowDescription: (params: { activityTitle: string }) => string;
  toastActivityInTwoDaysTitle: string;
  toastActivityInTwoDaysDescription: (params: { activityTitle: string }) => string;
  toastActivityInOneWeekTitle: string;
  toastActivityInOneWeekDescription: (params: { activityTitle: string }) => string;
  loginSuccessNotificationTitle: string;
  loginSuccessNotificationDescription: string;
  toastAssigneeAddedTitle: string;
  toastAssigneeAddedDescription: (params: { assigneeName: string }) => string;
  toastAssigneeUpdatedTitle: string;
  toastAssigneeUpdatedDescription: (params: { assigneeName: string }) => string;
  toastAssigneeDeletedTitle: string;
  toastAssigneeDeletedDescription: (params: { assigneeName: string }) => string;
  toastTodoAddedTitle: string;
  toastTodoAddedDescription: (params: { todoText: string }) => string;
  toastTodoUpdatedTitle: string;
  toastTodoUpdatedDescription: (params: { todoText: string }) => string;
  toastTodoDeletedTitle: string;
  toastTodoDeletedDescription: (params: { todoText: string }) => string;
  toastDefaultErrorDescription: string;
  toastFailedToFetchErrorDescription: (params: { endpoint: string }) => string;
  toastInvalidJsonErrorDescription: (params: { endpoint: string }) => string;
  toastActivityLoadErrorTitle: string; 
  toastCategoryLoadErrorTitle: string; 
  toastAssigneeLoadErrorTitle: string; 
  historyLoadErrorTitle: string; 
  toastHabitStartingSoonTitle: string;
  toastHabitStartingSoonDescription: (params: { habitName: string, slotName: string, slotTime: string }) => string;


  // Dashboard Page
  dashboardTitle: string;
  dashboardMainDescription: string;
  dashboardChartView: string;
  dashboardListView: string;
  dashboardProductivityView: string;
  dashboardViewWeekly: string;
  dashboardViewMonthly: string;
  dashboardActivityChartTitle: string; 
  dashboardHabitChartTitle: string; 
  dashboardChartTotalActivities: string;
  dashboardChartCompletedActivities: string;
  dashboardChartTotalHabits: string;
  dashboardChartCompletedHabits: string;
  dashboardHabitCompletionsLabel: string;
  dashboardActivityCategoryBreakdownTitle: string;
  dashboardHabitPerformanceTitle: string;
  dashboardWeekLabel: string;
  dashboardNoData: string;
  dashboardListLast7Days: string;
  dashboardListCurrentMonth: string;
  dashboardNoActivitiesForList: string;
  dashboardNotesLabel: string;
  dashboardActivityCountLabel: string; 
  dashboardCompletionStats: string;
  dashboardOverallCompletionRate: string;
  dashboardTotalScheduledItemsLabel: string;
  dashboardTotalCompletedItemsLabel: string;
  dashboardNoDataForAnalysis: string;
  dashboardProductivityPatterns: string;
  dashboardCompletionsByDay: string;
  dashboardCompletionsChartLabel: string;
  dashboardPeakDaySingle: (params: { day: string }) => string;
  dashboardPeakDayMultiple: (params: { days: string }) => string;
  dashboardNoPeakDay: string;
  dashboardProductivityTimeRange: string;
  dashboardStreaksTitle: string;
  dashboardCurrentStreak: string;
  dashboardLongestStreak: string;
  dashboardStreakDays: (params: { count: number }) => string;
  dashboardStreakInsight: string; 
  dashboardStreakInsightCombined: string; 
  dashboardFailureAnalysisTitle: string;
  dashboardFailureAnalysisMostIncomplete: (params: { days: string }) => string;
  dashboardFailureAnalysisAllComplete: string;
  dashboardFailureAnalysisInsight: string;
  dashboardFailureAnalysisNoData: string;

  // History Page & Logging
  historyPageTitle: string;
  historyPageDescription: string;
  noHistoryYet: string;
  historyLogLogin: (params: { username: string }) => string;
  historyLogLogout: (params: { username: string }) => string;
  historyLogAddActivity: (params: { activityId: number, title: string, mode: string, categoryName: string, date: string, time: string }) => string;
  historyLogUpdateActivity: (params: { activityId: number, title: string, mode: string, changesSummary: string }) => string;
  historyLogDeleteActivity: (params: { activityId: number, title: string, mode: string, categoryName: string, date: string, time: string }) => string;
  historyLogToggleActivityCompletion: (params: { activityId: number, title: string, mode: string, completed: boolean, date: string, time: string }) => string;
  historyLogAddCategory: (params: { categoryId: number, name: string, iconName: string, mode: string }) => string;
  historyLogUpdateCategory: (params: { categoryId: number, name: string, changesSummary: string }) => string;
  historyLogDeleteCategory: (params: { categoryId: number, name: string, iconName: string, mode: string }) => string;
  historyLogSwitchMode: (params: { oldMode: string, newMode: string }) => string;
  historyLogPasswordChangeAttempt: (params: { userId: string }) => string;
  historyLogAddAssignee: (params: { assigneeId: number, name: string, username: string, isAdmin: boolean }) => string;
  historyLogUpdateAssignee: (params: { assigneeId: number, name: string, changesSummary: string }) => string;
  historyLogDeleteAssignee: (params: { assigneeId: number, name: string, username: string }) => string;
  historyLogAddHabit: (params: { name: string }) => string;
  historyLogUpdateHabit: (params: { habitId: number, name: string, changesSummary: string }) => string;
  historyLogDeleteHabit: (params: { name: string }) => string;
  historyLogToggleHabitCompletion: (params: { habitName: string, slotName: string, date: string, completed: boolean }) => string;
  historyLogTimezoneChange: (params: { oldTimezone: string, newTimezone: string }) => string;
  unknownUser: string;
  unknownText: string;
  unknownActivityTitle: string;
  unknownHabit: string;
  unknownSlot: string;
  unknownDate: string;
  timeNotSet: string;
  uncategorized: string;
  notSetValuePlaceholder: string;
  noDetailedChangesLogged: string;
  fieldChangeDetail: (params: { field: string, from: string, to: string }) => string;
  fieldSetToDetail: (params: { field: string, value: string }) => string;
  titleLabel: string;
  iconNameLabel: string;
  modeLabel: string;
  dateLabel: string;
  timeLabel: string;
  notesLabel: string;
  responsiblePeopleLabelShort: string; // For history
  recurrenceLabelShort: string; // For history
  adminStatusLabel: string;
  passwordChangedConfirmation: string;


  // Habits Feature
  manageHabits: string;
  habitsPageDescription: string;
  habitsFeatureComingSoon: string;
  toastHabitAddedTitle: string;
  toastHabitAddedDescription: (params: { habitName: string }) => string;
  toastHabitUpdatedTitle: string;
  toastHabitUpdatedDescription: (params: { habitName: string }) => string;
  toastHabitDeletedTitle: string;
  toastHabitDeletedDescription: (params: { habitName: string }) => string;
  
  addNewHabit: string;
  editHabit: string;
  habitNameLabel: string;
  habitNamePlaceholder: string;
  habitIconNameLabel: string;
  habitIconNamePlaceholder: string;
  habitSlotsLabel: string;
  addSlotButton: string;
  slotNameLabel: string;
  slotNamePlaceholder: string;
  slotDefaultTimeLabel: string;
  slotDefaultTimePlaceholder: string;
  deleteSlotSr: string;
  noHabitsYet: string;
  confirmDeleteHabitTitle: string;
  confirmDeleteHabitDescription: (params: { habitName: string }) => string;
  existingHabitsTitle: string;
  viewEditManageHabits: string; 
  habitsCount: (params: { count: number }) => string; 


  // Motivational Phrases
  motivationalPhrases: string[];

  // App Lock Screen
  appLockedTitle: string;
  appLockedDescription: string;
  appPinInputLabel: string;
  appPinInputPlaceholder: string;
  appUnlockButton: string;
  appPinIncorrect: string;
  appPinSetupError: string;
};

export const translations: Record<Locale, Translations> = {
  en: {
    addActivity: "Add Activity",
    manageCategories: "Categories",
    language: "Language",
    english: "English",
    spanish: "Spanish",
    french: "French",
    theme: "Theme",
    lightTheme: "Light",
    darkTheme: "Dark",
    systemTheme: "System",
    moreOptions: "More options",
    moreOptionsDesktop: "Settings",
    personalMode: "Personal",
    workMode: "Work",
    switchToPersonalMode: "Switch to Personal Mode",
    switchToWorkMode: "Switch to Work Mode",
    logout: "Logout",
    changePassword: "Change Password",
    dashboard: "Dashboard",
    notificationsTitle: "Notifications",
    noNotificationsYet: "No new notifications.",
    notificationUnread: "unread",
    markAllAsRead: "Mark all as read",
    clearAllNotifications: "Clear all",
    notificationBellLabel: "View notifications",
    viewHistory: "View History",
    enableSystemNotifications: "Enable System Notifications",
    systemNotificationsEnabled: "System Notifications Enabled",
    systemNotificationsBlocked: "System Notifications Blocked",
    enableSystemNotificationsDescription: "To enable notifications, please check your browser and system settings.",
    systemNotificationsNowActive: "System notifications are now active!",
    systemNotificationsUserDenied: "You've denied notification permissions. Please change this in your browser settings if you wish to enable them.",
    systemNotificationsNotYetEnabled: "System notifications not yet enabled.",
    systemNotificationsDismissed: "You can enable notifications later from the options menu.",
    manageAssignees: "Manage Assignees",
    timezoneSettingTitle: "Timezone",
    currentTimezoneLabel: (params) => `Timezone: ${params.tz}`,
    useSystemTimezone: "Use System Default",
    backToCalendar: "Back to Calendar",
    addCategory: "Add Category",
    editCategory: "Edit Category",
    addNewCategory: "Add New Category",
    updateCategoryDetails: "Update the details of your category.",
    createCategoryDescription: "Create a new category for your activities.",
    categoryName: "Category Name",
    iconName: "Icon Name (from Lucide)",
    iconNameDescriptionLink: "Enter a PascalCase icon name from <a>lucide.dev/icons</a>.",
    categoryMode: "Category Mode",
    modePersonal: "Personal",
    modeWork: "Work",
    modeAll: "All Modes",
    saveChanges: "Save Changes",
    cancel: "Cancel",
    existingCategories: "Existing Categories",
    viewEditManageCategories: "View, edit, and manage your current categories.",
    delete: "Delete",
    confirmDelete: "Are you sure?",
    confirmDeleteCategoryDescription: (params) => `This action will delete the category "${params.categoryName}". Activities using this category will no longer be associated with it. This cannot be undone.`,
    categoriesCount: (params) => `You have ${params.count} categor${params.count === 1 ? 'y' : 'ies'}.`,
    noCategoriesYet: "No categories added yet. Use the form to add your first category.",
    addNewAssignee: "Add New Assignee",
    editAssignee: "Edit Assignee",
    assigneeNameLabel: "Assignee Name",
    assigneeNamePlaceholder: "e.g., John Doe, Partner",
    usernameLabel: "Username",
    usernamePlaceholder: "e.g., johndoe (min 3 chars)",
    usernameMinLength: (params) => `Username must be at least ${params.length} characters.`,
    usernameIsRequired: "Username is required.",
    passwordLabel: "Password",
    newPasswordOptionalLabel: "New Password (optional)",
    enterPasswordPlaceholder: "Enter password",
    leaveBlankToKeepCurrent: "Leave blank to keep current password",
    confirmPasswordLabel: "Confirm Password",
    confirmPasswordPlaceholder: "Confirm password",
    passwordIsRequiredForCreation: "Password is required for new assignees.",
    createAssigneeDescription: "Create a new assignee for your tasks.",
    updateAssigneeDetails: "Update the details of this assignee.",
    existingAssignees: "Existing Assignees",
    viewEditManageAssignees: "View, edit, and manage your assignees.",
    confirmDeleteAssigneeDescription: (params) => `This action will delete the assignee "${params.assigneeName}". Activities assigned to them will become unassigned. This cannot be undone.`,
    assigneesCount: (params) => `You have ${params.count} assignee${params.count === 1 ? '' : 's'}.`,
    noAssigneesYet: "No assignees added yet. Use the form to add your first assignee.",
    usernameTakenErrorTitle: "Username Unavailable",
    usernameTakenErrorDescription: (params) => `The username "${params.username}" is already taken. Please choose another one.`,
    administratorLabel: "Administrator",
    adminBadge: "Admin",
    adminStatusEditDisabled: "Admin status can be changed during edit.",
    passwordComplexityRequirements: "Password must meet complexity requirements.",
    passwordRequiresLowercase: "Must contain at least one lowercase letter.",
    passwordRequiresUppercase: "Must contain at least one uppercase letter.",
    passwordRequiresNumber: "Must contain at least one number.",
    passwordRequiresSymbol: "Must contain at least one symbol (e.g., !@#$%^&*).",
    editActivityTitle: "Edit Activity",
    addActivityTitle: "Add New Activity",
    editActivityDescription: (params) => `Update the details of your activity. Default date: ${params.formattedInitialDate}.`,
    addActivityDescription: (params) => `Fill in the details for your new activity. Default date: ${params.formattedInitialDate}.`,
    activityTitleLabel: "Activity Title",
    categoryLabel: "Category",
    selectCategoryPlaceholder: "Select a category",
    loadingCategoriesPlaceholder: "Loading categories...",
    activityDateLabel: "Start Date / Date",
    pickADate: "Pick a date",
    activityTimeLabel: "Activity Time (HH:MM)",
    activityTimeDescription24Hour: "Use 24-hour format (e.g., 14:30).",
    invalidTimeFormat24Hour: "Invalid time format. Use HH:MM (24-hour).",
    activityNotesLabel: "Notes",
    activityNotesPlaceholder: "Add any additional details or links here...",
    todosLabel: "Todos",
    addTodo: "Add Todo",
    newTodoPlaceholder: "New todo item",
    toastActivityUpdatedTitle: "Activity Updated",
    toastActivityUpdatedDescription: "Your activity has been successfully updated.",
    toastActivityAddedTitle: "Activity Added",
    toastActivityAddedDescription: "Your new activity has been successfully added.",
    recurrenceLabel: "Recurrence",
    recurrenceTypeLabel: "Repeats",
    recurrenceNone: "None",
    recurrenceDaily: "Daily",
    recurrenceWeekly: "Weekly",
    recurrenceMonthly: "Monthly",
    recurrenceEndDateLabel: "End Date",
    recurrenceNoEndDate: "No end date",
    recurrencePickEndDate: "Pick end date",
    recurrenceDaysOfWeekLabel: "On Days",
    recurrenceDayOfMonthLabel: "Day of Month",
    recurrenceDayOfMonthPlaceholder: "e.g., 15",
    recurrenceClearEndDate: "Clear end date",
    daySun: "Sun",
    dayMon: "Mon",
    dayTue: "Tue",
    dayWed: "Wed",
    dayThu: "Thu",
    dayFri: "Fri",
    daySat: "Sat",
    responsiblePeopleLabel: "Responsible People",
    selectResponsiblePersonPlaceholder: "Select assignees",
    unassigned: "Unassigned",
    noAssigneesForSelection: "No assignees available to select.",
    activitiesForDate: (params) => `Activities for ${params.date}`,
    activitiesForWeek: (params) => `Activities for week: ${params.startDate} - ${params.endDate}`,
    activitiesForMonth: (params) => `Activities for ${params.month}`,
    loadingDate: "Loading date...",
    noActivitiesForDay: "No activities scheduled for this day.",
    noActivitiesForPeriod: "No activities scheduled for this period.",
    selectDateToSeeActivities: "Select a date to see activities.",
    confirmDeleteActivityTitle: "Are you sure?",
    confirmDeleteActivityDescription: (params) => `This action cannot be undone. This will permanently delete the activity "${params.activityTitle}" and all its associated todos. If it's a recurring activity, the entire series will be deleted.`,
    toastActivityDeletedTitle: "Activity Deleted",
    toastActivityDeletedDescription: (params) => `"${params.activityTitle}" has been removed.`,
    todayButton: "Today",
    viewDaily: "Daily",
    viewWeekly: "Weekly",
    viewMonthly: "Monthly",
    allActivitiesCompleted: "Well done! All activities for this period are complete.",
    habitsForDayTitle: "Habits for Today",
    noHabitsForDay: "No habits to display for this day.",
    markAsComplete: "Mark as complete",
    editActivitySr: "Edit Activity",
    deleteActivitySr: "Delete Activity",
    addToCalendarSr: "Add to Calendar",
    todosCompleted: (params) => `${params.completed} / ${params.total} todos completed`,
    noDetailsAvailable: "No details available.",
    noTodosForThisActivity: "No todos for this activity.",
    recurrenceDailyText: "Daily",
    recurrenceWeeklyText: "Weekly",
    recurrenceMonthlyText: "Monthly",
    loginWelcomeMessage: "Log in to manage your activities.",
    loginUsernameLabel: "Username",
    loginPasswordLabel: "Password",
    loginUsernamePlaceholder: "Enter your username",
    loginPasswordPlaceholder: "Enter your password",
    loginButtonText: "Login",
    loginLoggingIn: "Logging in...",
    loginInvalidCredentials: "Incorrect username or password. Please double-check your credentials. If you are new, you might need to create an account first or ensure your administrator has created one for you.",
    loginErrorTitle: "Login Error",
    loginUsernameRequired: "Username is required.",
    loginPasswordRequired: "Password is required.",
    loginSecurityNoticeBackend: "Secure login with backend. Ensure your credentials match your backend user data.",
    loginRedirecting: "Redirecting...",
    rememberMeLabel: "Keep me logged in",
    showPassword: "Show password",
    hidePassword: "Hide password",
    changePasswordModalTitle: "Change Password",
    changePasswordModalDescription: "Enter your current password and a new password below.",
    currentPasswordLabel: "Current Password",
    newPasswordLabel: "New Password",
    confirmNewPasswordLabel: "Confirm New Password",
    currentPasswordPlaceholder: "Your current password",
    newPasswordPlaceholder: "Your new password",
    confirmNewPasswordPlaceholder: "Confirm your new password",
    updatePasswordButton: "Update Password",
    passwordUpdateSuccessTitle: "Password Updated",
    passwordUpdateSuccessDescription: "Your password has been successfully changed.",
    passwordUpdateErrorIncorrectCurrent: "Incorrect current password.",
    passwordUpdateErrorNewPasswordRequired: "New password is required.",
    passwordUpdateErrorConfirmPasswordRequired: "Confirm new password is required.",
    passwordUpdateErrorPasswordsDoNotMatch: "New passwords do not match.",
    passwordUpdateErrorCurrentEqualsNew: "New password must be different from the current password.",
    passwordMinLength: (params) => `Password must be at least ${params.length} characters.`,
    passwordUpdateFailedError: "Failed to update password. Please check your old password or try again later.",
    toastCategoryAddedTitle: "Category Added",
    toastCategoryAddedDescription: (params) => `Category "${params.categoryName}" has been added.`,
    toastCategoryUpdatedTitle: "Category Updated",
    toastCategoryUpdatedDescription: (params) => `Category "${params.categoryName}" has been updated.`,
    toastCategoryDeletedTitle: "Category Deleted",
    toastCategoryDeletedDescription: (params) => `Category "${params.categoryName}" has been removed.`,
    toastActivityStartingSoonTitle: "Activity Starting Soon!",
    toastActivityStartingSoonDescription: (params) => `"${params.activityTitle}" is scheduled for ${params.activityTime}.`,
    toastActivityTomorrowTitle: "Activity Reminder: Tomorrow",
    toastActivityTomorrowDescription: (params) => `"${params.activityTitle}" is scheduled for tomorrow.`,
    toastActivityInTwoDaysTitle: "Activity Reminder: In 2 Days",
    toastActivityInTwoDaysDescription: (params) => `"${params.activityTitle}" is scheduled in 2 days.`,
    toastActivityInOneWeekTitle: "Activity Reminder: In 1 Week",
    toastActivityInOneWeekDescription: (params) => `"${params.activityTitle}" is scheduled in one week.`,
    loginSuccessNotificationTitle: "Login Successful",
    loginSuccessNotificationDescription: "Welcome back! You are now logged in.",
    toastAssigneeAddedTitle: "Assignee Added",
    toastAssigneeAddedDescription: (params) => `Assignee "${params.assigneeName}" has been added.`,
    toastAssigneeUpdatedTitle: "Assignee Updated",
    toastAssigneeUpdatedDescription: (params) => `Assignee "${params.assigneeName}" has been updated.`,
    toastAssigneeDeletedTitle: "Assignee Deleted",
    toastAssigneeDeletedDescription: (params) => `Assignee "${params.assigneeName}" has been removed.`,
    toastTodoAddedTitle: "Todo Added",
    toastTodoAddedDescription: (params) => `Todo "${params.todoText}" added.`,
    toastTodoUpdatedTitle: "Todo Updated",
    toastTodoUpdatedDescription: (params) => `Todo "${params.todoText}" updated.`,
    toastTodoDeletedTitle: "Todo Deleted",
    toastTodoDeletedDescription: (params) => `Todo "${params.todoText}" removed.`,
    toastDefaultErrorDescription: "An unexpected error occurred. Please try again.",
    toastFailedToFetchErrorDescription: (params) => `Could not connect to the server at ${params.endpoint}. Please check your internet connection.`,
    toastInvalidJsonErrorDescription: (params) => `Received an invalid response from the server at ${params.endpoint}.`,
    toastActivityLoadErrorTitle: "Error Loading Activities",
    toastCategoryLoadErrorTitle: "Error Loading Categories",
    toastAssigneeLoadErrorTitle: "Error Loading Users",
    historyLoadErrorTitle: "Error Loading History",
    toastHabitStartingSoonTitle: "Habit Starting Soon!",
    toastHabitStartingSoonDescription: (params) => `Your habit "${params.habitName} - ${params.slotName}" is scheduled for ${params.slotTime}.`,
    dashboardTitle: "Activity Dashboard",
    dashboardMainDescription: "Track your activity progress and view summaries.",
    dashboardChartView: "Chart View",
    dashboardListView: "List View",
    dashboardProductivityView: "Productivity",
    dashboardViewWeekly: "Last 7 Days",
    dashboardViewMonthly: "Current Month (by Week)",
    dashboardActivityChartTitle: "Activity Overview",
    dashboardHabitChartTitle: "Habit Overview",
    dashboardChartTotalActivities: "Total Activities",
    dashboardChartCompletedActivities: "Completed Activities",
    dashboardChartTotalHabits: "Total Habit Slots",
    dashboardChartCompletedHabits: "Completed Habit Slots",
    dashboardHabitCompletionsLabel: "Habit Completions",
    dashboardActivityCategoryBreakdownTitle: "Activity Category Breakdown",
    dashboardHabitPerformanceTitle: "Habit Performance",
    dashboardWeekLabel: "W",
    dashboardNoData: "No activity data available for the selected period.",
    dashboardListLast7Days: "Last 7 Days",
    dashboardListCurrentMonth: "Current Month",
    dashboardNoActivitiesForList: "No activities or habits found for the selected period.",
    dashboardNotesLabel: "Notes",
    dashboardActivityCountLabel: "Completed Activities",
    dashboardCompletionStats: "Completion Statistics",
    dashboardOverallCompletionRate: "Overall Completion Rate:",
    dashboardTotalScheduledItemsLabel: "Total Scheduled Items:",
    dashboardTotalCompletedItemsLabel: "Total Completed Items:",
    dashboardNoDataForAnalysis: "Not enough data for analysis in this period.",
    dashboardProductivityPatterns: "Productivity Patterns",
    dashboardCompletionsByDay: "Completions by Day of Week",
    dashboardCompletionsChartLabel: "Completions",
    dashboardPeakDaySingle: (params) => `Your most productive day is ${params.day}. Keep it up!`,
    dashboardPeakDayMultiple: (params) => `Your most productive days are ${params.days}. Great work!`,
    dashboardNoPeakDay: "No specific peak productivity day identified in this period.",
    dashboardProductivityTimeRange: "Productivity insights for",
    dashboardStreaksTitle: "Streaks",
    dashboardCurrentStreak: "Current Streak",
    dashboardLongestStreak: "Longest Streak",
    dashboardStreakDays: (params) => `${params.count} day${params.count === 1 ? '' : 's'}`,
    dashboardStreakInsight: "Consistency is key! Uncompleted tasks break streaks.",
    dashboardStreakInsightCombined: "Consistency is key! Uncompleted activities or habits break streaks.",
    dashboardFailureAnalysisTitle: "What days do you usually miss your items?",
    dashboardFailureAnalysisMostIncomplete: (params) => `The days with the most incomplete items are: ${params.days}.`,
    dashboardFailureAnalysisAllComplete: "Congratulations! It seems you complete all your items or have no items scheduled in this period.",
    dashboardFailureAnalysisInsight: "If this is recurrent, would it be beneficial to schedule fewer items for those days?",
    dashboardFailureAnalysisNoData: "Not enough data to analyze failure days.",
    historyPageTitle: "Activity History",
    historyPageDescription: "Recent actions performed during this session.",
    noHistoryYet: "No activity recorded in this session yet.",
    historyLogLogin: (params) => `User "${params.username}" logged in.`,
    historyLogLogout: (params) => `User "${params.username}" logged out.`,
    historyLogAddActivity: (params) => `Added ${params.mode} Activity: "${params.title}" (Category: ${params.categoryName}) for ${params.date} at ${params.time}. (ID: ${params.activityId})`,
    historyLogUpdateActivity: (params) => `Updated ${params.mode} Activity "${params.title}" (ID: ${params.activityId}). Changes: ${params.changesSummary}.`,
    historyLogDeleteActivity: (params) => `Deleted ${params.mode} Activity: "${params.title}" (Category: ${params.categoryName}) for ${params.date} at ${params.time}. (ID: ${params.activityId})`,
    historyLogToggleActivityCompletion: (params) => `Marked ${params.mode} Activity "${params.title}" (ID: ${params.activityId}) for ${params.date} at ${params.time} as ${params.completed ? 'completed' : 'incomplete'}.`,
    historyLogAddCategory: (params) => `Added Category: "${params.name}" (Icon: ${params.iconName}, Mode: ${params.mode}). (ID: ${params.categoryId})`,
    historyLogUpdateCategory: (params) => `Updated Category "${params.name}" (ID: ${params.categoryId}). Changes: ${params.changesSummary}.`,
    historyLogDeleteCategory: (params) => `Deleted Category: "${params.name}" (Icon: ${params.iconName}, Mode: ${params.mode}). (ID: ${params.categoryId})`,
    historyLogSwitchMode: (params) => `Switched mode from ${params.oldMode} to ${params.newMode}.`,
    historyLogPasswordChangeAttempt: (params) => `Password change attempt for user ID: ${params.userId}.`,
    historyLogAddAssignee: (params) => `Added Assignee: "${params.name}" (Username: ${params.username}, Admin: ${params.isAdmin ? 'Yes' : 'No'}). (ID: ${params.assigneeId})`,
    historyLogUpdateAssignee: (params) => `Updated Assignee "${params.name}" (ID: ${params.assigneeId}). Changes: ${params.changesSummary}.`,
    historyLogDeleteAssignee: (params) => `Deleted Assignee: "${params.name}" (Username: ${params.username}). (ID: ${params.assigneeId})`,
    historyLogAddHabit: (params) => `Added Habit: "${params.name}".`,
    historyLogUpdateHabit: (params) => `Updated Habit "${params.name}" (ID: ${params.habitId}). Changes: ${params.changesSummary}.`,
    historyLogDeleteHabit: (params) => `Deleted Habit: "${params.name}".`,
    historyLogToggleHabitCompletion: (params) => `Habit "${params.habitName}", Slot "${params.slotName}" on ${params.date} marked as ${params.completed ? 'completed' : 'incomplete'}.`,
    historyLogTimezoneChange: (params) => `Timezone changed from ${params.oldTimezone} to ${params.newTimezone}.`,
    unknownUser: "Unknown User",
    unknownText: "N/A",
    unknownActivityTitle: "Unnamed Activity",
    unknownHabit: "Unknown Habit",
    unknownSlot: "Unknown Slot",
    unknownDate: "Date N/A",
    timeNotSet: "Time not set",
    uncategorized: "Uncategorized",
    notSetValuePlaceholder: "Not set",
    noDetailedChangesLogged: "Details verified; no specific field changes.",
    fieldChangeDetail: (params) => `${params.field} changed from "${params.from}" to "${params.to}"`,
    fieldSetToDetail: (params) => `${params.field} set to "${params.value}"`,
    titleLabel: "Title",
    iconNameLabel: "Icon Name",
    modeLabel: "Mode",
    dateLabel: "Date",
    timeLabel: "Time",
    notesLabel: "Notes",
    responsiblePeopleLabelShort: "Assignees",
    recurrenceLabelShort: "Recurrence",
    adminStatusLabel: "Admin Status",
    passwordChangedConfirmation: "Password was changed.",
    manageHabits: "Manage Habits",
    habitsPageDescription: "Create and manage your daily habits.",
    habitsFeatureComingSoon: "Habit tracking feature coming soon! Use this page to manage your habits.",
    toastHabitAddedTitle: "Habit Added",
    toastHabitAddedDescription: (params) => `Habit "${params.habitName}" has been added.`,
    toastHabitUpdatedTitle: "Habit Updated",
    toastHabitUpdatedDescription: (params) => `Habit "${params.habitName}" has been updated.`,
    toastHabitDeletedTitle: "Habit Deleted",
    toastHabitDeletedDescription: (params) => `Habit "${params.habitName}" has been removed.`,
    addNewHabit: "Add New Habit",
    editHabit: "Edit Habit",
    habitNameLabel: "Habit Name",
    habitNamePlaceholder: "e.g., Morning Exercise, Drink Water",
    habitIconNameLabel: "Habit Icon",
    habitIconNamePlaceholder: "e.g., Activity, GlassWater",
    habitSlotsLabel: "Time Slots / Instances",
    addSlotButton: "Add Slot",
    slotNameLabel: "Slot Name",
    slotNamePlaceholder: "e.g., Morning, Before Bed",
    slotDefaultTimeLabel: "Default Time (Optional)",
    slotDefaultTimePlaceholder: "HH:MM",
    deleteSlotSr: "Delete slot",
    noHabitsYet: "No habits created yet. Add your first habit!",
    confirmDeleteHabitTitle: "Delete Habit?",
    confirmDeleteHabitDescription: (params) => `Are you sure you want to delete the habit "${params.habitName}"? All its completion data will also be removed.`,
    existingHabitsTitle: "Existing Habits",
    viewEditManageHabits: "View, edit, and manage your current habits.",
    habitsCount: (params) => `You have ${params.count} habit${params.count === 1 ? '' : 's'}.`,
    motivationalPhrases: [
      "The secret of getting ahead is getting started.",
      "Don't watch the clock; do what it does. Keep going.",
      "The only way to do great work is to love what you do.",
      "Believe you can and you're halfway there.",
      "Act as if what you do makes a difference. It does.",
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "Strive not to be a success, but rather to be of value.",
      "The future depends on what you do today.",
      "Well done is better than well said.",
      "You are never too old to set another goal or to dream a new dream."
    ],
    appLockedTitle: "App Locked",
    appLockedDescription: "Enter your PIN to continue.",
    appPinInputLabel: "PIN",
    appPinInputPlaceholder: "Enter PIN",
    appUnlockButton: "Unlock",
    appPinIncorrect: "Incorrect PIN. Please try again.",
    appPinSetupError: "PIN lock is not configured correctly. Please contact support.",
  },
  es: {
    addActivity: "Añadir Actividad",
    manageCategories: "Categorías",
    language: "Idioma",
    english: "Inglés",
    spanish: "Español",
    french: "Français",
    theme: "Tema",
    lightTheme: "Claro",
    darkTheme: "Oscuro",
    systemTheme: "Sistema",
    moreOptions: "Más opciones",
    moreOptionsDesktop: "Configuración",
    personalMode: "Personal",
    workMode: "Trabajo",
    switchToPersonalMode: "Cambiar a Modo Personal",
    switchToWorkMode: "Cambiar a Modo Trabajo",
    logout: "Cerrar Sesión",
    changePassword: "Cambiar Contraseña",
    dashboard: "Dashboard",
    notificationsTitle: "Notificaciones",
    noNotificationsYet: "No hay notificaciones nuevas.",
    notificationUnread: "sin leer",
    markAllAsRead: "Marcar todas como leídas",
    clearAllNotifications: "Limpiar todas",
    notificationBellLabel: "Ver notificaciones",
    viewHistory: "Ver Historial",
    enableSystemNotifications: "Activar Notificaciones del Sistema",
    systemNotificationsEnabled: "Notificaciones del Sistema Activadas",
    systemNotificationsBlocked: "Notificaciones del Sistema Bloqueadas",
    enableSystemNotificationsDescription: "Para activar las notificaciones, revisa la configuración de tu navegador y sistema.",
    systemNotificationsNowActive: "¡Las notificaciones del sistema ahora están activas!",
    systemNotificationsUserDenied: "Has denegado los permisos de notificación. Por favor, cámbialo en la configuración de tu navegador si deseas activarlas.",
    systemNotificationsNotYetEnabled: "Notificaciones del sistema aún no activadas.",
    systemNotificationsDismissed: "Puedes activar las notificaciones más tarde desde el menú de opciones.",
    manageAssignees: "Gestionar Asignados",
    timezoneSettingTitle: "Zona Horaria",
    currentTimezoneLabel: (params) => `Zona Horaria: ${params.tz}`,
    useSystemTimezone: "Usar Predeterminada del Sistema",
    backToCalendar: "Volver al Calendario",
    addCategory: "Añadir Categoría",
    editCategory: "Editar Categoría",
    addNewCategory: "Añadir Nueva Categoría",
    updateCategoryDetails: "Actualiza los detalles de tu categoría.",
    createCategoryDescription: "Crea una nueva categoría para tus actividades.",
    categoryName: "Nombre de la Categoría",
    iconName: "Nombre del Icono (de Lucide)",
    iconNameDescriptionLink: "Introduce un nombre de icono en PascalCase de <a>lucide.dev/icons</a>.",
    categoryMode: "Modo de Categoría",
    modePersonal: "Personal",
    modeWork: "Trabajo",
    modeAll: "Todos los Modos",
    saveChanges: "Guardar Cambios",
    cancel: "Cancelar",
    existingCategories: "Categorías Existentes",
    viewEditManageCategories: "Ver, editar y gestionar tus categorías actuales.",
    delete: "Eliminar",
    confirmDelete: "¿Estás seguro?",
    confirmDeleteCategoryDescription: (params) => `Esta acción eliminará la categoría "${params.categoryName}". Las actividades que usan esta categoría ya no estarán asociadas a ella. Esto no se puede deshacer.`,
    categoriesCount: (params) => `Tienes ${params.count} categorí${params.count === 1 ? 'a' : 'as'}.`,
    noCategoriesYet: "Aún no has añadido categorías. Usa el formulario para añadir tu primera categoría.",
    addNewAssignee: "Añadir Nuevo Asignado",
    editAssignee: "Editar Asignado",
    assigneeNameLabel: "Nombre del Asignado",
    assigneeNamePlaceholder: "Ej: Juan Pérez, Compañero",
    usernameLabel: "Nombre de Usuario",
    usernamePlaceholder: "Ej: juanperez (mín 3 car.)",
    usernameMinLength: (params) => `El nombre de usuario debe tener al menos ${params.length} caracteres.`,
    usernameIsRequired: "El nombre de usuario es obligatorio.",
    passwordLabel: "Contraseña",
    newPasswordOptionalLabel: "Nueva Contraseña (opcional)",
    enterPasswordPlaceholder: "Introducir contraseña",
    leaveBlankToKeepCurrent: "Dejar en blanco para mantener la contraseña actual",
    confirmPasswordLabel: "Confirmar Contraseña",
    confirmPasswordPlaceholder: "Confirmar contraseña",
    passwordIsRequiredForCreation: "La contraseña es obligatoria para nuevos asignados.",
    createAssigneeDescription: "Crea un nuevo asignado para tus tareas.",
    updateAssigneeDetails: "Actualiza los detalles de este asignado.",
    existingAssignees: "Asignados Existentes",
    viewEditManageAssignees: "Ver, editar y gestionar tus asignados.",
    confirmDeleteAssigneeDescription: (params) => `Esta acción eliminará al asignado "${params.assigneeName}". Las actividades asignadas a esta persona quedarán sin asignar. Esto no se puede deshacer.`,
    assigneesCount: (params) => `Tienes ${params.count} asignado${params.count === 1 ? '' : 's'}.`,
    noAssigneesYet: "Aún no has añadido asignados. Usa el formulario para añadir tu primer asignado.",
    usernameTakenErrorTitle: "Nombre de Usuario No Disponible",
    usernameTakenErrorDescription: (params) => `El nombre de usuario "${params.username}" ya está en uso. Por favor, elige otro.`,
    administratorLabel: "Administrador",
    adminBadge: "Admin",
    adminStatusEditDisabled: "El estado de administrador se puede cambiar durante la edición.",
    passwordComplexityRequirements: "La contraseña debe cumplir los requisitos de complexidad.",
    passwordRequiresLowercase: "Debe contener al menos una letra minúscula.",
    passwordRequiresUppercase: "Debe contener al menos una letra mayúscula.",
    passwordRequiresNumber: "Debe contener al menos un número.",
    passwordRequiresSymbol: "Debe contener al menos un símbolo (ej: !@#$%^&*).",
    editActivityTitle: "Editar Actividad",
    addActivityTitle: "Añadir Nueva Actividad",
    editActivityDescription: (params) => `Actualiza los detalles de tu actividad. Fecha por defecto: ${params.formattedInitialDate}.`,
    addActivityDescription: (params) => `Completa los detalles de tu nueva actividad. Fecha por defecto: ${params.formattedInitialDate}.`,
    activityTitleLabel: "Título de la Actividad",
    categoryLabel: "Categoría",
    selectCategoryPlaceholder: "Selecciona una categoría",
    loadingCategoriesPlaceholder: "Cargando categorías...",
    activityDateLabel: "Fecha de Inicio / Fecha",
    pickADate: "Elige una fecha",
    activityTimeLabel: "Hora de la Actividad (HH:MM)",
    activityTimeDescription24Hour: "Usa el formato de 24 horas (ej: 14:30).",
    invalidTimeFormat24Hour: "Formato de hora inválido. Usa HH:MM (24 horas).",
    activityNotesLabel: "Notas",
    activityNotesPlaceholder: "Añade detalles adicionales o enlaces aquí...",
    todosLabel: "Tareas",
    addTodo: "Añadir Tarea",
    newTodoPlaceholder: "Nueva tarea",
    toastActivityUpdatedTitle: "Actividad Actualizada",
    toastActivityUpdatedDescription: "Tu actividad ha sido actualizada exitosamente.",
    toastActivityAddedTitle: "Actividad Añadida",
    toastActivityAddedDescription: "Tu nueva actividad ha sido añadida exitosamente.",
    recurrenceLabel: "Recurrencia",
    recurrenceTypeLabel: "Se repite",
    recurrenceNone: "Nunca",
    recurrenceDaily: "Diariamente",
    recurrenceWeekly: "Semanalmente",
    recurrenceMonthly: "Mensualmente",
    recurrenceEndDateLabel: "Fecha de Fin",
    recurrenceNoEndDate: "Sin fecha de fin",
    recurrencePickEndDate: "Elegir fecha de fin",
    recurrenceDaysOfWeekLabel: "En los días",
    recurrenceDayOfMonthLabel: "Día del Mes",
    recurrenceDayOfMonthPlaceholder: "ej: 15",
    recurrenceClearEndDate: "Quitar fecha de fin",
    daySun: "Dom",
    dayMon: "Lun",
    dayTue: "Mar",
    dayWed: "Mié",
    dayThu: "Jue",
    dayFri: "Vie",
    daySat: "Sáb",
    responsiblePeopleLabel: "Personas Responsables",
    selectResponsiblePersonPlaceholder: "Selecciona asignados",
    unassigned: "Sin asignar",
    noAssigneesForSelection: "No hay asignados disponibles para seleccionar.",
    activitiesForDate: (params) => `Actividades para ${params.date}`,
    activitiesForWeek: (params) => `Actividades para la semana: ${params.startDate} - ${params.endDate}`,
    activitiesForMonth: (params) => `Actividades para ${params.month}`,
    loadingDate: "Cargando fecha...",
    noActivitiesForDay: "No hay actividades programadas para este día.",
    noActivitiesForPeriod: "No hay actividades programadas para este período.",
    selectDateToSeeActivities: "Selecciona una fecha para ver actividades.",
    confirmDeleteActivityTitle: "¿Estás seguro?",
    confirmDeleteActivityDescription: (params) => `Esta acción no se puede deshacer. Esto eliminará permanentemente la actividad "${params.activityTitle}" y todas sus tareas asociadas. Si es una actividad recurrente, se eliminará toda la serie.`,
    toastActivityDeletedTitle: "Actividad Eliminada",
    toastActivityDeletedDescription: (params) => `Se ha eliminado "${params.activityTitle}".`,
    todayButton: "Hoy",
    viewDaily: "Diario",
    viewWeekly: "Semanal",
    viewMonthly: "Mensual",
    allActivitiesCompleted: "¡Bien hecho! Todas las actividades de este periodo están completas.",
    habitsForDayTitle: "Hábitos para Hoy",
    noHabitsForDay: "No hay hábitos para mostrar este día.",
    markAsComplete: "Marcar como completo",
    editActivitySr: "Editar Actividad",
    deleteActivitySr: "Eliminar Actividad",
    addToCalendarSr: "Añadir al Calendario",
    todosCompleted: (params) => `${params.completed} / ${params.total} tareas completadas`,
    noDetailsAvailable: "No hay detalles disponibles.",
    noTodosForThisActivity: "No hay tareas para esta actividad.",
    recurrenceDailyText: "Diariamente",
    recurrenceWeeklyText: "Semanalmente",
    recurrenceMonthlyText: "Mensualmente",
    loginWelcomeMessage: "Inicia sesión para gestionar tus actividades.",
    loginUsernameLabel: "Usuario",
    loginPasswordLabel: "Contraseña",
    loginUsernamePlaceholder: "Introduce tu usuario",
    loginPasswordPlaceholder: "Introduce tu contraseña",
    loginButtonText: "Iniciar Sesión",
    loginLoggingIn: "Iniciando sesión...",
    loginInvalidCredentials: "Usuario o contraseña incorrectos. Por favor, verifica tus credenciales. Si eres nuevo, puede que necesites crear una cuenta primero o asegurarte de que tu administrador te haya creado una.",
    loginErrorTitle: "Error de Inicio de Sesión",
    loginUsernameRequired: "El nombre de usuario es obligatorio.",
    loginPasswordRequired: "La contraseña es obligatoria.",
    loginSecurityNoticeBackend: "Inicio de sesión seguro con backend. Asegúrate que tus credenciales coincidan con tus datos de usuario en el backend.",
    loginRedirecting: "Redirigiendo...",
    rememberMeLabel: "Mantenerme conectado",
    showPassword: "Mostrar contraseña",
    hidePassword: "Ocultar contraseña",
    changePasswordModalTitle: "Cambiar Contraseña",
    changePasswordModalDescription: "Introduce tu contraseña actual y una nueva contraseña a continuación.",
    currentPasswordLabel: "Contraseña Actual",
    newPasswordLabel: "Nueva Contraseña",
    confirmNewPasswordLabel: "Confirmar Nueva Contraseña",
    currentPasswordPlaceholder: "Tu contraseña actual",
    newPasswordPlaceholder: "Tu nueva contraseña",
    confirmNewPasswordPlaceholder: "Confirma tu nueva contraseña",
    updatePasswordButton: "Actualizar Contraseña",
    passwordUpdateSuccessTitle: "Contraseña Actualizada",
    passwordUpdateSuccessDescription: "Tu contraseña ha sido cambiada exitosamente.",
    passwordUpdateErrorIncorrectCurrent: "Contraseña actual incorrecta.",
    passwordUpdateErrorNewPasswordRequired: "La nueva contraseña es obligatoria.",
    passwordUpdateErrorConfirmPasswordRequired: "Confirmar la nueva contraseña es obligatorio.",
    passwordUpdateErrorPasswordsDoNotMatch: "Las nuevas contraseñas no coinciden.",
    passwordUpdateErrorCurrentEqualsNew: "La nueva contraseña debe ser diferente a la actual.",
    passwordMinLength: (params) => `La contraseña debe tener al menos ${params.length} caracteres.`,
    passwordUpdateFailedError: "No se pudo actualizar la contraseña. Verifica tu contraseña anterior o inténtalo más tarde.",
    toastCategoryAddedTitle: "Categoría Añadida",
    toastCategoryAddedDescription: (params) => `La categoría "${params.categoryName}" ha sido añadida.`,
    toastCategoryUpdatedTitle: "Categoría Actualizada",
    toastCategoryUpdatedDescription: (params) => `La categoría "${params.categoryName}" ha sido actualizada.`,
    toastCategoryDeletedTitle: "Categoría Eliminada",
    toastCategoryDeletedDescription: (params) => `La categoría "${params.categoryName}" ha sido eliminada.`,
    toastActivityStartingSoonTitle: "¡Actividad Comienza Pronto!",
    toastActivityStartingSoonDescription: (params) => `"${params.activityTitle}" está programada para las ${params.activityTime}.`,
    toastActivityTomorrowTitle: "Recordatorio: Mañana",
    toastActivityTomorrowDescription: (params) => `"${params.activityTitle}" está programada para mañana.`,
    toastActivityInTwoDaysTitle: "Recordatorio: En 2 Días",
    toastActivityInTwoDaysDescription: (params) => `"${params.activityTitle}" está programada en 2 días.`,
    toastActivityInOneWeekTitle: "Recordatorio: En 1 Semana",
    toastActivityInOneWeekDescription: (params) => `"${params.activityTitle}" está programada en una semana.`,
    loginSuccessNotificationTitle: "Inicio de Sesión Exitoso",
    loginSuccessNotificationDescription: "¡Bienvenido de nuevo! Has iniciado sesión.",
    toastAssigneeAddedTitle: "Asignado Añadido",
    toastAssigneeAddedDescription: (params) => `El asignado "${params.assigneeName}" ha sido añadido.`,
    toastAssigneeUpdatedTitle: "Asignado Actualizado",
    toastAssigneeUpdatedDescription: (params) => `El asignado "${params.assigneeName}" ha sido actualizado.`,
    toastAssigneeDeletedTitle: "Asignado Eliminado",
    toastAssigneeDeletedDescription: (params) => `El asignado "${params.assigneeName}" ha sido eliminado.`,
    toastTodoAddedTitle: "Tarea Añadida",
    toastTodoAddedDescription: (params) => `Tarea "${params.todoText}" añadida.`,
    toastTodoUpdatedTitle: "Tarea Actualizada",
    toastTodoUpdatedDescription: (params) => `Tarea "${params.todoText}" actualizada.`,
    toastTodoDeletedTitle: "Tarea Eliminada",
    toastTodoDeletedDescription: (params) => `Tarea "${params.todoText}" eliminada.`,
    toastDefaultErrorDescription: "Ocurrió un error inesperado. Por favor, inténtalo de nuevo.",
    toastFailedToFetchErrorDescription: (params) => `No se pudo conectar al servidor en ${params.endpoint}. Por favor, verifica tu conexión a internet.`,
    toastInvalidJsonErrorDescription: (params) => `Se recibió una respuesta inválida del servidor en ${params.endpoint}.`,
    toastActivityLoadErrorTitle: "Error al Cargar Actividades",
    toastCategoryLoadErrorTitle: "Error al Cargar Categorías",
    toastAssigneeLoadErrorTitle: "Error al Cargar Usuarios",
    historyLoadErrorTitle: "Error al Cargar Historial",
    toastHabitStartingSoonTitle: "¡Hábito Comienza Pronto!",
    toastHabitStartingSoonDescription: (params) => `Tu hábito "${params.habitName} - ${params.slotName}" está programado para las ${params.slotTime}.`,
    dashboardTitle: "Panel de Actividades",
    dashboardMainDescription: "Sigue el progreso de tus actividades y visualiza resúmenes.",
    dashboardChartView: "Vista de Gráfico",
    dashboardListView: "Vista de Lista",
    dashboardProductivityView: "Productividad",
    dashboardViewWeekly: "Últimos 7 Días",
    dashboardViewMonthly: "Mes Actual (por Semana)",
    dashboardActivityChartTitle: "Resumen de Actividades",
    dashboardHabitChartTitle: "Resumen de Hábitos",
    dashboardChartTotalActivities: "Actividades Totales",
    dashboardChartCompletedActivities: "Actividades Completadas",
    dashboardChartTotalHabits: "Franjas de Hábitos Totales",
    dashboardChartCompletedHabits: "Franjas de Hábitos Completadas",
    dashboardHabitCompletionsLabel: "Completados de Hábitos",
    dashboardActivityCategoryBreakdownTitle: "Desglose por Categoría de Actividad",
    dashboardHabitPerformanceTitle: "Rendimiento de Hábitos",
    dashboardWeekLabel: "S",
    dashboardNoData: "No hay datos de actividad disponibles para el período seleccionado.",
    dashboardListLast7Days: "Últimos 7 Días",
    dashboardListCurrentMonth: "Mes Actual",
    dashboardNoActivitiesForList: "No se encontraron actividades o hábitos para el período seleccionado.",
    dashboardNotesLabel: "Notas",
    dashboardActivityCountLabel: "Actividades Completadas",
    dashboardCompletionStats: "Estadísticas de Finalización",
    dashboardOverallCompletionRate: "Tasa de Finalización General:",
    dashboardTotalScheduledItemsLabel: "Total de Elementos Programados:",
    dashboardTotalCompletedItemsLabel: "Total de Elementos Completados:",
    dashboardNoDataForAnalysis: "No hay suficientes datos para el análisis en este período.",
    dashboardProductivityPatterns: "Patrones de Productividad",
    dashboardCompletionsByDay: "Finalizaciones por Día de la Semana",
    dashboardCompletionsChartLabel: "Finalizaciones",
    dashboardPeakDaySingle: (params) => `Tu día más productivo es el ${params.day}. ¡Sigue así!`,
    dashboardPeakDayMultiple: (params) => `Tus días más productivos son los ${params.days}. ¡Buen trabajo!`,
    dashboardNoPeakDay: "No se identificó un día pico de productividad en este período.",
    dashboardProductivityTimeRange: "Perspectivas de productividad para",
    dashboardStreaksTitle: "Rachas",
    dashboardCurrentStreak: "Racha Actual",
    dashboardLongestStreak: "Racha Más Larga",
    dashboardStreakDays: (params) => `${params.count} día${params.count === 1 ? '' : 's'}`,
    dashboardStreakInsight: "¡La constancia es la clave! Las tareas no completadas rompen las rachas.",
    dashboardStreakInsightCombined: "¡La constancia es la clave! Actividades o hábitos no completados rompen las rachas.",
    dashboardFailureAnalysisTitle: "¿Qué días sueles fallar en tus elementos programados?",
    dashboardFailureAnalysisMostIncomplete: (params) => `Los días que más elementos quedan incompletos son: ${params.days}.`,
    dashboardFailureAnalysisAllComplete: "¡Felicidades! Parece que completas todos tus elementos o no tienes elementos programados en este periodo.",
    dashboardFailureAnalysisInsight: "Si esto es recurrente, ¿te convendría programar menos elementos para esos días?",
    dashboardFailureAnalysisNoData: "No hay suficientes datos para analizar los días de fallo.",
    historyPageTitle: "Historial de Actividad",
    historyPageDescription: "Acciones recientes realizadas durante esta sesión.",
    noHistoryYet: "Aún no se ha registrado actividad en esta sesión.",
    historyLogLogin: (params) => `Usuario "${params.username}" inició sesión.`,
    historyLogLogout: (params) => `Usuario "${params.username}" cerró sesión.`,
    historyLogAddActivity: (params) => `Añadida Actividad (${params.mode}): "${params.title}" (Categoría: ${params.categoryName}) para ${params.date} a las ${params.time}. (ID: ${params.activityId})`,
    historyLogUpdateActivity: (params) => `Actualizada Actividad (${params.mode}) "${params.title}" (ID: ${params.activityId}). Cambios: ${params.changesSummary}.`,
    historyLogDeleteActivity: (params) => `Eliminada Actividad (${params.mode}): "${params.title}" (Categoría: ${params.categoryName}) para ${params.date} a las ${params.time}. (ID: ${params.activityId})`,
    historyLogToggleActivityCompletion: (params) => `Marcada Actividad (${params.mode}) "${params.title}" (ID: ${params.activityId}) para ${params.date} a las ${params.time} como ${params.completed ? 'completada' : 'incompleta'}.`,
    historyLogAddCategory: (params) => `Añadida Categoría: "${params.name}" (Icono: ${params.iconName}, Modo: ${params.mode}). (ID: ${params.categoryId})`,
    historyLogUpdateCategory: (params) => `Actualizada Categoría "${params.name}" (ID: ${params.categoryId}). Cambios: ${params.changesSummary}.`,
    historyLogDeleteCategory: (params) => `Eliminada Categoría: "${params.name}" (Icono: ${params.iconName}, Modo: ${params.mode}). (ID: ${params.categoryId})`,
    historyLogSwitchMode: (params) => `Cambiado modo de ${params.oldMode} a ${params.newMode}.`,
    historyLogPasswordChangeAttempt: (params) => `Intento de cambio de contraseña para usuario ID: ${params.userId}.`,
    historyLogAddAssignee: (params) => `Asignado añadido: "${params.name}" (Usuario: ${params.username}, Admin: ${params.isAdmin ? 'Sí' : 'No'}). (ID: ${params.assigneeId})`,
    historyLogUpdateAssignee: (params) => `Asignado actualizado "${params.name}" (ID: ${params.assigneeId}). Cambios: ${params.changesSummary}.`,
    historyLogDeleteAssignee: (params) => `Asignado eliminado: "${params.name}" (Usuario: ${params.username}). (ID: ${params.assigneeId})`,
    historyLogAddHabit: (params) => `Añadido Hábito: "${params.name}".`,
    historyLogUpdateHabit: (params) => `Actualizado Hábito "${params.name}" (ID: ${params.habitId}). Cambios: ${params.changesSummary}.`,
    historyLogDeleteHabit: (params) => `Eliminado Hábito: "${params.name}".`,
    historyLogToggleHabitCompletion: (params) => `Hábito "${params.habitName}", Franja "${params.slotName}" en ${params.date} marcado como ${params.completed ? 'completado' : 'incompleto'}.`,
    historyLogTimezoneChange: (params) => `Zona horaria cambiada de ${params.oldTimezone} a ${params.newTimezone}.`,
    unknownUser: "Usuario Desconocido",
    unknownText: "N/A",
    unknownActivityTitle: "Actividad sin nombre",
    unknownHabit: "Hábito desconocido",
    unknownSlot: "Franja desconocida",
    unknownDate: "Fecha N/A",
    timeNotSet: "Hora no establecida",
    uncategorized: "Sin categoría",
    notSetValuePlaceholder: "Sin especificar",
    noDetailedChangesLogged: "Detalles verificados; sin cambios específicos de campo.",
    fieldChangeDetail: (params) => `${params.field} cambiado de "${params.from}" a "${params.to}"`,
    fieldSetToDetail: (params) => `${params.field} establecido a "${params.value}"`,
    titleLabel: "Título",
    iconNameLabel: "Nombre de Icono",
    modeLabel: "Modo",
    dateLabel: "Fecha",
    timeLabel: "Hora",
    notesLabel: "Notas",
    responsiblePeopleLabelShort: "Asignados",
    recurrenceLabelShort: "Recurrencia",
    adminStatusLabel: "Estado Admin",
    passwordChangedConfirmation: "La contraseña fue cambiada.",
    manageHabits: "Gestionar Hábitos",
    habitsPageDescription: "Crea y gestiona tus hábitos diarios.",
    habitsFeatureComingSoon: "¡La función de seguimiento de hábitos llegará pronto! Utiliza esta página para gestionar tus hábitos.",
    toastHabitAddedTitle: "Hábito Añadido",
    toastHabitAddedDescription: (params) => `El hábito "${params.habitName}" ha sido añadido.`,
    toastHabitUpdatedTitle: "Hábito Actualizado",
    toastHabitUpdatedDescription: (params) => `El hábito "${params.habitName}" ha sido actualizado.`,
    toastHabitDeletedTitle: "Hábito Eliminado",
    toastHabitDeletedDescription: (params) => `El hábito "${params.habitName}" ha sido eliminado.`,
    addNewHabit: "Añadir Nuevo Hábito",
    editHabit: "Editar Hábito",
    habitNameLabel: "Nombre del Hábito",
    habitNamePlaceholder: "Ej: Ejercicio Matutino, Beber Agua",
    habitIconNameLabel: "Icono del Hábito",
    habitIconNamePlaceholder: "Ej: Activity, GlassWater",
    habitSlotsLabel: "Franjas Horarias / Instancias",
    addSlotButton: "Añadir Franja",
    slotNameLabel: "Nombre de la Franja",
    slotNamePlaceholder: "Ej: Mañana, Antes de Dormir",
    slotDefaultTimeLabel: "Hora Predeterminada (Opcional)",
    slotDefaultTimePlaceholder: "HH:MM",
    deleteSlotSr: "Eliminar franja",
    noHabitsYet: "Aún no has creado hábitos. ¡Añade tu primer hábito!",
    confirmDeleteHabitTitle: "¿Eliminar Hábito?",
    confirmDeleteHabitDescription: (params) => `¿Estás seguro de que quieres eliminar el hábito "${params.habitName}"? Todos sus datos de completado también serán eliminados.`,
    existingHabitsTitle: "Hábitos Existentes",
    viewEditManageHabits: "Ver, editar y gestionar tus hábitos actuales.",
    habitsCount: (params) => `Tienes ${params.count} hábito${params.count === 1 ? '' : 's'}.`,
    motivationalPhrases: [
      "El secreto para salir adelante es empezar.",
      "No mires el reloj; haz lo que él hace. Sigue adelante.",
      "La única forma de hacer un gran trabajo es amar lo que haces.",
      "Cree que puedes y estarás a medio camino.",
      "Actúa como si lo que haces marca la diferencia. Lo hace.",
      "El éxito no es definitivo, el fracaso no es fatal: Lo que cuenta es el coraje para continuar.",
      "Esfuérzate no por ser un éxito, sino por ser de valor.",
      "El futuro depende de lo que hagas hoy.",
      "Bien hecho es mejor que bien dicho.",
      "Nunca eres demasiado viejo para establecer otra meta o para soñar un nuevo sueño."
    ],
    appLockedTitle: "Aplicación Bloqueada",
    appLockedDescription: "Introduce tu PIN para continuar.",
    appPinInputLabel: "PIN",
    appPinInputPlaceholder: "Introduce el PIN",
    appUnlockButton: "Desbloquear",
    appPinIncorrect: "PIN incorrecto. Por favor, inténtalo de nuevo.",
    appPinSetupError: "El bloqueo por PIN no está configurado correctamente. Contacta con el soporte.",
  },
  fr: {
    addActivity: "Ajouter une activité",
    manageCategories: "Catégories",
    language: "Langue",
    english: "Anglais",
    spanish: "Espagnol",
    french: "Français",
    theme: "Thème",
    lightTheme: "Clair",
    darkTheme: "Sombre",
    systemTheme: "Système",
    moreOptions: "Plus d'options",
    moreOptionsDesktop: "Paramètres",
    personalMode: "Personnel",
    workMode: "Travail",
    switchToPersonalMode: "Passer en mode Personnel",
    switchToWorkMode: "Passer en mode Travail",
    logout: "Déconnexion",
    changePassword: "Changer de mot de passe",
    dashboard: "Tableau de bord",
    notificationsTitle: "Notifications",
    noNotificationsYet: "Aucune nouvelle notification.",
    notificationUnread: "non lue(s)",
    markAllAsRead: "Marquer tout comme lu",
    clearAllNotifications: "Tout effacer",
    notificationBellLabel: "Voir les notifications",
    viewHistory: "Voir l'historique",
    enableSystemNotifications: "Activer les notifications système",
    systemNotificationsEnabled: "Notifications système activées",
    systemNotificationsBlocked: "Notifications système bloquées",
    enableSystemNotificationsDescription: "Pour activer les notifications, veuillez vérifier les paramètres de votre navigateur et de votre système.",
    systemNotificationsNowActive: "Les notifications système sont maintenant actives !",
    systemNotificationsUserDenied: "Vous avez refusé les autorisations de notification. Veuillez modifier cela dans les paramètres de votre navigateur si vous souhaitez les activer.",
    systemNotificationsNotYetEnabled: "Notifications système pas encore activées.",
    systemNotificationsDismissed: "Vous pourrez activer les notifications plus tard depuis le menu des options.",
    manageAssignees: "Gérer les Personnes Assignées",
    timezoneSettingTitle: "Fuseau Horaire",
    currentTimezoneLabel: (params) => `Fuseau: ${params.tz}`,
    useSystemTimezone: "Utiliser celui par Défaut du Système",
    backToCalendar: "Retour au calendrier",
    addCategory: "Ajouter une catégorie",
    editCategory: "Modifier la catégorie",
    addNewCategory: "Ajouter une nouvelle catégorie",
    updateCategoryDetails: "Mettez à jour les détails de votre catégorie.",
    createCategoryDescription: "Créez une nouvelle catégorie pour vos activités.",
    categoryName: "Nom de la catégorie",
    iconName: "Nom de l'icône (de Lucide)",
    iconNameDescriptionLink: "Entrez un nom d'icône en PascalCase depuis <a>lucide.dev/icons</a>.",
    categoryMode: "Mode de catégorie",
    modePersonal: "Personnel",
    modeWork: "Travail",
    modeAll: "Tous les modes",
    saveChanges: "Enregistrer les modifications",
    cancel: "Annuler",
    existingCategories: "Catégories existantes",
    viewEditManageCategories: "Visualisez, modifiez et gérez vos catégories actuelles.",
    delete: "Supprimer",
    confirmDelete: "Êtes-vous sûr ?",
    confirmDeleteCategoryDescription: (params) => `Cette action supprimera la catégorie "${params.categoryName}". Les activités utilisant cette catégorie ne lui seront plus associées. Cette action est irréversible.`,
    categoriesCount: (params) => `Vous avez ${params.count} catégorie${params.count === 1 ? '' : 's'}.`,
    noCategoriesYet: "Aucune catégorie ajoutée pour le moment. Utilisez le formulaire pour ajouter votre première catégorie.",
    addNewAssignee: "Ajouter une Nouvelle Personne Assignée",
    editAssignee: "Modifier la Personne Assignée",
    assigneeNameLabel: "Nom de la Personne Assignée",
    assigneeNamePlaceholder: "Ex : Jean Dupont, Partenaire",
    usernameLabel: "Nom d'utilisateur",
    usernamePlaceholder: "Ex : jeandupont (min 3 cars)",
    usernameMinLength: (params) => `Le nom d'utilisateur doit comporter au moins ${params.length} caractères.`,
    usernameIsRequired: "Le nom d'utilisateur est requis.",
    passwordLabel: "Mot de passe",
    newPasswordOptionalLabel: "Nouveau mot de passe (optionnel)",
    enterPasswordPlaceholder: "Saisir le mot de passe",
    leaveBlankToKeepCurrent: "Laisser vide pour conserver le mot de passe actuel",
    confirmPasswordLabel: "Confirmer le mot de passe",
    confirmPasswordPlaceholder: "Confirmer le mot de passe",
    passwordIsRequiredForCreation: "Un mot de passe est requis pour les nouvelles personnes assignées.",
    createAssigneeDescription: "Créez une nouvelle personne assignée pour vos tâches.",
    updateAssigneeDetails: "Mettez à jour les détails de cette personne assignée.",
    existingAssignees: "Personnes Assignées Existantes",
    viewEditManageAssignees: "Visualisez, modifiez et gérez vos personnes assignées.",
    confirmDeleteAssigneeDescription: (params) => `Cette action supprimera la personne assignée "${params.assigneeName}". Les activités qui lui sont assignées deviendront non assignées. Cette action est irréversible.`,
    assigneesCount: (params) => `Vous avez ${params.count} personne${params.count === 1 ? '' : 's'} assignée${params.count === 1 ? '' : 's'}.`,
    noAssigneesYet: "Aucune personne assignée pour le moment. Utilisez le formulaire pour en ajouter.",
    usernameTakenErrorTitle: "Nom d'utilisateur Indisponible",
    usernameTakenErrorDescription: (params) => `Le nom d'utilisateur "${params.username}" est déjà pris. Veuillez en choisir un autre.`,
    administratorLabel: "Administrateur",
    adminBadge: "Admin",
    adminStatusEditDisabled: "Le statut d'administrateur peut être modifié lors de l'édition.",
    passwordComplexityRequirements: "Le mot de passe doit répondre aux exigences de complexité.",
    passwordRequiresLowercase: "Doit contenir au moins une lettre minuscule.",
    passwordRequiresUppercase: "Doit contenir au moins une lettre majuscule.",
    passwordRequiresNumber: "Doit contenir au moins un chiffre.",
    passwordRequiresSymbol: "Doit contenir au moins un symbole (ex: !@#$%^&*).",
    editActivityTitle: "Modifier l'activité",
    addActivityTitle: "Ajouter une nouvelle activité",
    editActivityDescription: (params) => `Mettez à jour les détails de votre activité. Date par défaut : ${params.formattedInitialDate}.`,
    addActivityDescription: (params) => `Remplissez les détails de votre nouvelle activité. Date par défaut : ${params.formattedInitialDate}.`,
    activityTitleLabel: "Titre de l'activité",
    categoryLabel: "Catégorie",
    selectCategoryPlaceholder: "Sélectionnez une catégorie",
    loadingCategoriesPlaceholder: "Chargement des catégories...",
    activityDateLabel: "Date de début / Date",
    pickADate: "Choisissez une date",
    activityTimeLabel: "Heure de l'activité (HH:MM)",
    activityTimeDescription24Hour: "Utilisez le format 24 heures (ex: 14:30).",
    invalidTimeFormat24Hour: "Format d'heure invalide. Utilisez HH:MM (24 heures).",
    activityNotesLabel: "Notes",
    activityNotesPlaceholder: "Ajoutez des détails supplémentaires ou des liens ici...",
    todosLabel: "Tâches",
    addTodo: "Ajouter une tâche",
    newTodoPlaceholder: "Nouvelle tâche",
    toastActivityUpdatedTitle: "Activité mise à jour",
    toastActivityUpdatedDescription: "Votre activité a été mise à jour avec succès.",
    toastActivityAddedTitle: "Activité ajoutée",
    toastActivityAddedDescription: "Votre nouvelle activité a été ajoutée avec succès.",
    recurrenceLabel: "Récurrence",
    recurrenceTypeLabel: "Répéter",
    recurrenceNone: "Jamais",
    recurrenceDaily: "Quotidiennement",
    recurrenceWeekly: "Hebdomadairement",
    recurrenceMonthly: "Mensuellement",
    recurrenceEndDateLabel: "Date de fin",
    recurrenceNoEndDate: "Pas de date de fin",
    recurrencePickEndDate: "Choisir une date de fin",
    recurrenceDaysOfWeekLabel: "Les jours",
    recurrenceDayOfMonthLabel: "Jour du mois",
    recurrenceDayOfMonthPlaceholder: "ex : 15",
    recurrenceClearEndDate: "Effacer la date de fin",
    daySun: "Dim",
    dayMon: "Lun",
    dayTue: "Mar",
    dayWed: "Mer",
    dayThu: "Jeu",
    dayFri: "Ven",
    daySat: "Sam",
    responsiblePeopleLabel: "Personnes Responsables",
    selectResponsiblePersonPlaceholder: "Sélectionnez les personnes assignées",
    unassigned: "Non assigné",
    noAssigneesForSelection: "Aucune personne assignée disponible à sélectionner.",
    activitiesForDate: (params) => `Activités pour ${params.date}`,
    activitiesForWeek: (params) => `Activités pour la semaine : ${params.startDate} - ${params.endDate}`,
    activitiesForMonth: (params) => `Activités pour ${params.month}`,
    loadingDate: "Chargement de la date...",
    noActivitiesForDay: "Aucune activité prévue pour ce jour.",
    noActivitiesForPeriod: "Aucune activité prévue pour cette période.",
    selectDateToSeeActivities: "Sélectionnez une date pour voir les activités.",
    confirmDeleteActivityTitle: "Êtes-vous sûr ?",
    confirmDeleteActivityDescription: (params) => `Cette action est irréversible. Cela supprimera définitivement l'activité "${params.activityTitle}" et toutes ses tâches associées. S'il s'agit d'une activité récurrente, toute la série sera supprimée.`,
    toastActivityDeletedTitle: "Activité supprimée",
    toastActivityDeletedDescription: (params) => `"${params.activityTitle}" a été supprimée.`,
    todayButton: "Aujourd'hui",
    viewDaily: "Journalier",
    viewWeekly: "Hebdomadaire",
    viewMonthly: "Mensuel",
    allActivitiesCompleted: "Bien joué ! Toutes les activités pour cette période sont terminées.",
    habitsForDayTitle: "Habitudes du Jour",
    noHabitsForDay: "Aucune habitude à afficher pour ce jour.",
    markAsComplete: "Marquer comme terminé",
    editActivitySr: "Modifier l'activité",
    deleteActivitySr: "Supprimer l'activité",
    addToCalendarSr: "Ajouter au calendrier",
    todosCompleted: (params) => `${params.completed} / ${params.total} tâches terminées`,
    noDetailsAvailable: "Aucun détail disponible.",
    noTodosForThisActivity: "Aucune tâche pour cette activité.",
    recurrenceDailyText: "Quotidiennement",
    recurrenceWeeklyText: "Hebdomadairement",
    recurrenceMonthlyText: "Mensuellement",
    loginWelcomeMessage: "Connectez-vous pour gérer vos activités.",
    loginUsernameLabel: "Nom d'utilisateur",
    loginPasswordLabel: "Mot de passe",
    loginUsernamePlaceholder: "Entrez votre nom d'utilisateur",
    loginPasswordPlaceholder: "Entrez votre mot de passe",
    loginButtonText: "Connexion",
    loginLoggingIn: "Connexion en cours...",
    loginInvalidCredentials: "Nom d'utilisateur ou mot de passe incorrect. Veuillez vérifier vos identifiants. Si vous êtes nouveau, vous devrez peut-être d'abord créer un compte ou vous assurer que votre administrateur en a créé un pour vous.",
    loginErrorTitle: "Erreur de connexion",
    loginUsernameRequired: "Le nom d'utilisateur est requis.",
    loginPasswordRequired: "Le mot de passe est requis.",
    loginSecurityNoticeBackend: "Connexion sécurisée avec le backend. Assurez-vous que vos identifiants correspondent à vos données utilisateur backend.",
    loginRedirecting: "Redirection...",
    rememberMeLabel: "Rester connecté",
    showPassword: "Afficher le mot de passe",
    hidePassword: "Masquer le mot de passe",
    changePasswordModalTitle: "Changer de mot de passe",
    changePasswordModalDescription: "Entrez votre mot de passe actuel et un nouveau mot de passe ci-dessous.",
    currentPasswordLabel: "Mot de passe actuel",
    newPasswordLabel: "Nouveau mot de passe",
    confirmNewPasswordLabel: "Confirmer le nouveau mot de passe",
    currentPasswordPlaceholder: "Votre mot de passe actuel",
    newPasswordPlaceholder: "Votre nouveau mot de passe",
    confirmNewPasswordPlaceholder: "Confirmez votre nouveau mot de passe",
    updatePasswordButton: "Mettre à jour le mot de passe",
    passwordUpdateSuccessTitle: "Mot de passe mis à jour",
    passwordUpdateSuccessDescription: "Votre mot de passe a été changé avec succès.",
    passwordUpdateErrorIncorrectCurrent: "Mot de passe actuel incorrect.",
    passwordUpdateErrorNewPasswordRequired: "Le nouveau mot de passe est requis.",
    passwordUpdateErrorConfirmPasswordRequired: "La confirmation du nouveau mot de passe est requise.",
    passwordUpdateErrorPasswordsDoNotMatch: "Les nouveaux mots de passe ne correspondent pas.",
    passwordUpdateErrorCurrentEqualsNew: "Le nouveau mot de passe doit être différent du mot de passe actuel.",
    passwordMinLength: (params) => `Le mot de passe doit comporter au moins ${params.length} caractères.`,
    passwordUpdateFailedError: "Échec de la mise à jour du mot de passe. Veuillez vérifier votre ancien mot de passe ou réessayer plus tard.",
    toastCategoryAddedTitle: "Catégorie ajoutée",
    toastCategoryAddedDescription: (params) => `La catégorie "${params.categoryName}" a été ajoutée.`,
    toastCategoryUpdatedTitle: "Catégorie mise à jour",
    toastCategoryUpdatedDescription: (params) => `La catégorie "${params.categoryName}" a été mise à jour.`,
    toastCategoryDeletedTitle: "Catégorie supprimée",
    toastCategoryDeletedDescription: (params) => `La catégorie "${params.categoryName}" a été supprimée.`,
    toastActivityStartingSoonTitle: "Activité commençant bientôt !",
    toastActivityStartingSoonDescription: (params) => `"${params.activityTitle}" est prévue pour ${params.activityTime}.`,
    toastActivityTomorrowTitle: "Rappel d'activité : Demain",
    toastActivityTomorrowDescription: (params) => `"${params.activityTitle}" est prévue pour demain.`,
    toastActivityInTwoDaysTitle: "Rappel d'activité : Dans 2 jours",
    toastActivityInTwoDaysDescription: (params) => `"${params.activityTitle}" est prévue dans 2 jours.`,
    toastActivityInOneWeekTitle: "Rappel d'activité : Dans 1 semaine",
    toastActivityInOneWeekDescription: (params) => `"${params.activityTitle}" est prévue dans une semaine.`,
    loginSuccessNotificationTitle: "Connexion réussie",
    loginSuccessNotificationDescription: "Bienvenue ! Vous êtes maintenant connecté.",
    toastAssigneeAddedTitle: "Personne Assignée Ajoutée",
    toastAssigneeAddedDescription: (params) => `La personne "${params.assigneeName}" a été ajoutée.`,
    toastAssigneeUpdatedTitle: "Personne Assignée Mise à Jour",
    toastAssigneeUpdatedDescription: (params) => `La personne "${params.assigneeName}" a été mise à jour.`,
    toastAssigneeDeletedTitle: "Personne Assignée Supprimée",
    toastAssigneeDeletedDescription: (params) => `La personne "${params.assigneeName}" a été supprimée.`,
    toastTodoAddedTitle: "Tâche Ajoutée",
    toastTodoAddedDescription: (params) => `Tâche "${params.todoText}" ajoutée.`,
    toastTodoUpdatedTitle: "Tâche Mise à Jour",
    toastTodoUpdatedDescription: (params) => `Tâche "${params.todoText}" mise à jour.`,
    toastTodoDeletedTitle: "Tâche Supprimée",
    toastTodoDeletedDescription: (params) => `Tâche "${params.todoText}" supprimée.`,
    toastDefaultErrorDescription: "Une erreur inattendue s'est produite. Veuillez réessayer.",
    toastFailedToFetchErrorDescription: (params) => `Impossible de se connecter au serveur à ${params.endpoint}. Veuillez vérifier votre connexion internet.`,
    toastInvalidJsonErrorDescription: (params) => `Réponse invalide reçue du serveur à ${params.endpoint}.`,
    toastActivityLoadErrorTitle: "Erreur lors du Chargement des Activités",
    toastCategoryLoadErrorTitle: "Erreur lors du Chargement des Catégories",
    toastAssigneeLoadErrorTitle: "Erreur lors du Chargement des Utilisateurs",
    historyLoadErrorTitle: "Erreur lors du Chargement de l'Historique",
    toastHabitStartingSoonTitle: "Habitude Commençant Bientôt !",
    toastHabitStartingSoonDescription: (params) => `Votre habitude "${params.habitName} - ${params.slotName}" est prévue pour ${params.slotTime}.`,
    dashboardTitle: "Tableau de bord des activités",
    dashboardMainDescription: "Suivez la progression de vos activités et consultez des résumés.",
    dashboardChartView: "Vue graphique",
    dashboardListView: "Vue liste",
    dashboardProductivityView: "Productivité",
    dashboardViewWeekly: "7 derniers jours",
    dashboardViewMonthly: "Mois en cours (par semaine)",
    dashboardActivityChartTitle: "Aperçu des Activités",
    dashboardHabitChartTitle: "Aperçu des Habitudes",
    dashboardChartTotalActivities: "Total des activités",
    dashboardChartCompletedActivities: "Activités terminées",
    dashboardChartTotalHabits: "Total Créneaux d'Habitudes",
    dashboardChartCompletedHabits: "Créneaux d'Habitudes Terminés",
    dashboardHabitCompletionsLabel: "Habitudes terminées",
    dashboardActivityCategoryBreakdownTitle: "Répartition par Catégorie d'Activité",
    dashboardHabitPerformanceTitle: "Performance des Habitudes",
    dashboardWeekLabel: "S",
    dashboardNoData: "Aucune donnée d'activité disponible pour la période sélectionnée.",
    dashboardListLast7Days: "7 derniers jours",
    dashboardListCurrentMonth: "Mois en cours",
    dashboardNoActivitiesForList: "Aucune activité ou habitude trouvée pour la période sélectionnée.",
    dashboardNotesLabel: "Notes",
    dashboardActivityCountLabel: "Activités terminées",
    dashboardCompletionStats: "Statistiques d'achèvement",
    dashboardOverallCompletionRate: "Taux d'achèvement global:",
    dashboardTotalScheduledItemsLabel: "Total d'éléments programmés:",
    dashboardTotalCompletedItemsLabel: "Total d'éléments terminés:",
    dashboardNoDataForAnalysis: "Pas assez de données pour l'analyse sur cette période.",
    dashboardProductivityPatterns: "Patrons de productivité",
    dashboardCompletionsByDay: "Achèvements par jour de la semaine",
    dashboardCompletionsChartLabel: "Achèvements",
    dashboardPeakDaySingle: (params) => `Votre jour le plus productif est le ${params.day}. Continuez comme ça !`,
    dashboardPeakDayMultiple: (params) => `Vos jours les plus productifs sont les ${params.days}. Excellent travail !`,
    dashboardNoPeakDay: "Aucun pic de productivité identifié pour cette période.",
    dashboardProductivityTimeRange: "Aperçus de productivité pour",
    dashboardStreaksTitle: "Séries",
    dashboardCurrentStreak: "Série Actuelle",
    dashboardLongestStreak: "Plus Longue Série",
    dashboardStreakDays: (params) => `${params.count} jour${params.count === 1 ? '' : 's'}`,
    dashboardStreakInsight: "La régularité est la clé ! Les tâches non terminées brisent les séries.",
    dashboardStreakInsightCombined: "La régularité est la clé ! Les activités ou habitudes non terminées brisent les séries.",
    dashboardFailureAnalysisTitle: "Quels jours manquez-vous habituellement vos éléments programmés ?",
    dashboardFailureAnalysisMostIncomplete: (params) => `Les jours avec le plus d'éléments incomplets sont : ${params.days}.`,
    dashboardFailureAnalysisAllComplete: "Félicitations ! Il semble que vous terminez tous vos éléments ou que vous n'avez aucun élément programmé pour cette période.",
    dashboardFailureAnalysisInsight: "Si cela est récurrent, serait-il avantageux de programmer moins d'éléments pour ces jours-là ?",
    dashboardFailureAnalysisNoData: "Pas assez de données pour analyser les jours d'échec.",
    historyPageTitle: "Historique des activités",
    historyPageDescription: "Actions récentes effectuées pendant cette session.",
    noHistoryYet: "Aucune activité enregistrée dans cette session pour le moment.",
    historyLogLogin: (params) => `Utilisateur "${params.username}" connecté.`,
    historyLogLogout: (params) => `Utilisateur "${params.username}" déconnecté.`,
    historyLogAddActivity: (params) => `Activité (${params.mode}) ajoutée : "${params.title}" (Catégorie : ${params.categoryName}) pour le ${params.date} à ${params.time}. (ID : ${params.activityId})`,
    historyLogUpdateActivity: (params) => `Activité (${params.mode}) "${params.title}" (ID : ${params.activityId}) mise à jour. Changements : ${params.changesSummary}.`,
    historyLogDeleteActivity: (params) => `Activité (${params.mode}) supprimée : "${params.title}" (Catégorie : ${params.categoryName}) pour le ${params.date} à ${params.time}. (ID : ${params.activityId})`,
    historyLogToggleActivityCompletion: (params) => `Activité (${params.mode}) "${params.title}" (ID : ${params.activityId}) pour le ${params.date} à ${params.time} marquée comme ${params.completed ? 'terminée' : 'non terminée'}.`,
    historyLogAddCategory: (params) => `Catégorie ajoutée : "${params.name}" (Icône : ${params.iconName}, Mode : ${params.mode}). (ID : ${params.categoryId})`,
    historyLogUpdateCategory: (params) => `Catégorie "${params.name}" (ID : ${params.categoryId}) mise à jour. Changements : ${params.changesSummary}.`,
    historyLogDeleteCategory: (params) => `Catégorie supprimée : "${params.name}" (Icône : ${params.iconName}, Mode : ${params.mode}). (ID : ${params.categoryId})`,
    historyLogSwitchMode: (params) => `Mode changé de ${params.oldMode} à ${params.newMode}.`,
    historyLogPasswordChangeAttempt: (params) => `Tentative de changement de mot de passe pour l'utilisateur ID : ${params.userId}.`,
    historyLogAddAssignee: (params) => `Personne assignée ajoutée : "${params.name}" (Utilisateur : ${params.username}, Admin : ${params.isAdmin ? 'Oui' : 'Non'}). (ID : ${params.assigneeId})`,
    historyLogUpdateAssignee: (params) => `Personne assignée "${params.name}" (ID : ${params.assigneeId}) mise à jour. Changements : ${params.changesSummary}.`,
    historyLogDeleteAssignee: (params) => `Personne assignée supprimée : "${params.name}" (Utilisateur : ${params.username}). (ID : ${params.assigneeId})`,
    historyLogAddHabit: (params) => `Habitude ajoutée : "${params.name}".`,
    historyLogUpdateHabit: (params) => `Habitude "${params.name}" (ID : ${params.habitId}) mise à jour. Changements : ${params.changesSummary}.`,
    historyLogDeleteHabit: (params) => `Habitude supprimée : "${params.name}".`,
    historyLogToggleHabitCompletion: (params) => `Habitude "${params.habitName}", Créneau "${params.slotName}" le ${params.date} marqué comme ${params.completed ? 'terminé' : 'incomplet'}.`,
    historyLogTimezoneChange: (params) => `Fuseau horaire changé de ${params.oldTimezone} à ${params.newTimezone}.`,
    unknownUser: "Utilisateur Inconnu",
    unknownText: "N/A",
    unknownActivityTitle: "Activité sans nom",
    unknownHabit: "Habitude inconnue",
    unknownSlot: "Créneau inconnu",
    unknownDate: "Date N/A",
    timeNotSet: "Heure non définie",
    uncategorized: "Non catégorisé",
    notSetValuePlaceholder: "Non défini",
    noDetailedChangesLogged: "Détails vérifiés ; aucune modification de champ spécifique.",
    fieldChangeDetail: (params) => `${params.field} changé de "${params.from}" à "${params.to}"`,
    fieldSetToDetail: (params) => `${params.field} défini à "${params.value}"`,
    titleLabel: "Titre",
    iconNameLabel: "Nom de l'icône",
    modeLabel: "Mode",
    dateLabel: "Date",
    timeLabel: "Heure",
    notesLabel: "Notes",
    responsiblePeopleLabelShort: "Assignés",
    recurrenceLabelShort: "Récurrence",
    adminStatusLabel: "Statut Admin",
    passwordChangedConfirmation: "Le mot de passe a été changé.",
    manageHabits: "Gérer les habitudes",
    habitsPageDescription: "Créez et gérez vos habitudes quotidiennes.",
    habitsFeatureComingSoon: "La fonctionnalité de suivi des habitudes arrive bientôt ! Utilisez cette page pour gérer vos habitudes.",
    toastHabitAddedTitle: "Habitude Ajoutée",
    toastHabitAddedDescription: (params) => `L'habitude "${params.habitName}" a été ajoutée.`,
    toastHabitUpdatedTitle: "Habitude Mise à Jour",
    toastHabitUpdatedDescription: (params) => `L'habitude "${params.habitName}" a été mise à jour.`,
    toastHabitDeletedTitle: "Habitude Supprimée",
    toastHabitDeletedDescription: (params) => `L'habitude "${params.habitName}" a été supprimée.`,
    addNewHabit: "Ajouter une Nouvelle Habitude",
    editHabit: "Modifier l'Habitude",
    habitNameLabel: "Nom de l'Habitude",
    habitNamePlaceholder: "Ex : Exercice Matinal, Boire de l'eau",
    habitIconNameLabel: "Icône de l'Habitude",
    habitIconNamePlaceholder: "Ex : Activity, GlassWater",
    habitSlotsLabel: "Créneaux Horaires / Instances",
    addSlotButton: "Ajouter un Créneau",
    slotNameLabel: "Nom du Créneau",
    slotNamePlaceholder: "Ex : Matin, Avant de dormir",
    slotDefaultTimeLabel: "Heure par Défaut (Optionnel)",
    slotDefaultTimePlaceholder: "HH:MM",
    deleteSlotSr: "Supprimer le créneau",
    noHabitsYet: "Aucune habitude créée pour le moment. Ajoutez votre première habitude !",
    confirmDeleteHabitTitle: "Supprimer l'Habitude ?",
    confirmDeleteHabitDescription: (params) => `Êtes-vous sûr de vouloir supprimer l'habitude "${params.habitName}"? Toutes ses données d'achèvement seront également supprimées.`,
    existingHabitsTitle: "Habitudes Existantes",
    viewEditManageHabits: "Visualisez, modifiez et gérez vos habitudes actuelles.",
    habitsCount: (params) => `Vous avez ${params.count} habitude${params.count === 1 ? '' : 's'}.`,
    motivationalPhrases: [
        "Le secret pour avancer, c'est de commencer.",
        "Ne regarde pas l'horloge ; fais ce qu'elle fait. Continue.",
        "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
        "Crois que tu peux le faire et tu es à mi-chemin.",
        "Agis comme si ce que tu faisais faisait une différence. C'est le cas.",
        "Le succès n'est pas final, l'échec n'est pas fatal : C'est le courage de continuer qui compte.",
        "Efforce-toi non pas d'être un succès, mais plutôt d'être de valeur.",
        "L'avenir dépend de ce que vous faites aujourd'hui.",
        "Bien fait vaut mieux que bien dit.",
        "On n'est jamais trop vieux pour se fixer un autre but ou pour rêver un nouveau rêve."
    ],
    appLockedTitle: "Application Verrouillée",
    appLockedDescription: "Entrez votre PIN pour continuer.",
    appPinInputLabel: "PIN",
    appPinInputPlaceholder: "Entrez le PIN",
    appUnlockButton: "Déverrouiller",
    appPinIncorrect: "PIN incorrect. Veuillez réessayer.",
    appPinSetupError: "Le verrouillage par PIN n'est pas configuré correctement. Veuillez contacter le support.",
  },
};

type PathImpl<T, Key extends keyof T> =
  Key extends string
  ? T[Key] extends Record<string, any>
    ? | `${Key}.${PathImpl<T[Key], Exclude<keyof T[Key], keyof any[]>> & string}`
      | `${Key}.${Exclude<keyof T[Key], keyof any[]> & string}`
    : never
  : never;

type Path<T> = PathImpl<T, keyof T> | keyof T;

export type TranslationKey = Path<Translations['en']>;





