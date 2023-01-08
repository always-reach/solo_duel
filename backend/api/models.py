from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin, UserManager
from django.utils.translation import gettext_lazy as _


# Create your models here.

class User(AbstractBaseUser, PermissionsMixin):
    user_name = models.CharField(verbose_name="ユーザー名", blank=False, null=False, max_length=255, unique=True)
    email = models.EmailField(verbose_name="メールアドレス", blank=False, null=False, unique=True)
    password = models.CharField(verbose_name="パスワード", blank=False, null=False, max_length=255)
    last_login = models.DateTimeField(verbose_name="最終ログイン", null=True, blank=True)
    is_staff = models.BooleanField(verbose_name="スタッフ権限", default=True)
    is_active = models.BooleanField(verbose_name="論理削除", default=True)
    is_superuser = models.BooleanField(verbose_name="スーパーユーザー", default=False)

    objects = UserManager()
    EMAIL_FIELD = "email"
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["user_name", "password"]

    class META:
        verbose_name = _("user")
        verbose_name_plural = _("users")

    def __str__(self):
        return str(self.__dict__)

    def get_full_name(self):
        return self.user_name

    def has_module_perms(self, app_label):
        return True

    def has_perm(self, perm, obj=None):
        return True


class Card(models.Model):
    name = models.CharField(verbose_name="カード名", blank=False, null=False, max_length=255)
    effect = models.TextField(verbose_name="効果", blank=True, null=False)
    is_extra = models.BooleanField(verbose_name="エクストラデッキ", default=False)


class Deck(models.Model):
    name = models.CharField(verbose_name="デッキ名", blank=False, null=False, max_length=255)
    cards = models.ManyToManyField(Card, through="DeckCard")


class DeckCard(models.Model):
    card = models.ForeignKey(Card, on_delete=models.CASCADE)
    deck = models.ForeignKey(Deck, on_delete=models.CASCADE)
    card_count = models.IntegerField(verbose_name="枚数", validators=[MinValueValidator(1), MaxValueValidator(3)])
